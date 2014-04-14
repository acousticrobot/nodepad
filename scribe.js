var fs = require('fs'),
    path = require('path'),
    marked = require('marked');

function addToFile (data) {
  var filePath = path.join(process.cwd(), 'public', 'notes', data.file + ".md"),
      text = "\n\n@user-" + data.name + "\n\n" + data.message;

  fs.exists(filePath, function (exists) {
    if (!exists) {
      console.log("no file: %s", filePath);
      return;
    }

    fs.appendFile(filePath, text, function (err) {
      console.log("added %s to %s", text, filePath);
    });
  });
}

function record (data) {

  addToFile(data);

  var message = '<div class="user-name">' + data.name + '</div>';

  message += marked(data.message);
  return {"message": message};
}

exports.record = record;
