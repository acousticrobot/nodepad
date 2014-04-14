var fs = require('fs'),
    path = require('path'),
    marked = require('marked');

function addWithUser (filePath, data) {
  fs.readFile(filePath, "binary", function(err, text) {

    var addOn = "",
        lastUser = null;

    if(err) {
      console.log("error reading file: %s", filePath);
    }

    var re = /@user-(.*)/g,
        users = text.match(re);

    if (users) {
      lastUser = users[users.length - 1].substring(6);
    }

    if (users && lastUser === data.name) {
      addOn = "\n\n" + data.message;
    } else{
      addOn = "\n\n@user-" + data.name + "\n\n" + data.message;
    }

    fs.appendFile(filePath, addOn, function (err) {
      console.log("added %s to %s", addOn, filePath);
    });
  });
}

function addToFile (data) {
  var filePath = path.join(process.cwd(), 'public', 'notes', data.file + ".md"),
      text = "";

  fs.exists(filePath, function (exists) {
    if (!exists) {
      console.log("no file: %s", filePath);
      return;
    }

    addWithUser(filePath, data);
  });
}

function record (data) {

  addToFile(data);

  var message = '<div class="user-name">' + data.name + '</div>';

  message += marked(data.message);

  // drop pre code to next line
  message = message.replace(/<pre><code>/gi, '<pre class="prettyprint"><code>\n');

  return {"message": message};
}

exports.record = record;
