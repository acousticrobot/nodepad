var noteView = require('views/noteView'),
    path = require('path'),
    fs = require('fs'),
    querystring = require('querystring');
    marked = require('marked');

function index(pathInfo, req, res){
  console.log('handle:index');

  res.writeHead(200, {'content-type': 'text/plain'});
  res.write("enter a nodepad: /your user name/note");
  res.end();
}

function note (pathInfo, req, res) {

  var fileName = pathInfo.note.substr(0, pathInfo.note.length - 3), // remove .md
      filePath = path.join(process.cwd(), 'public', 'notes', pathInfo.note),
      user = unescape(pathInfo.user);

  fs.exists(filePath, function (exists) {

    if (!exists) {
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write(noteView.notFound(user,fileName));
      res.end();
      return;
    }

    fs.readFile(filePath, "binary", function(err, text) {

      if(err) {
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.write(err + "\n");
        res.end();
        return;
      }
      console.log(text);
      console.log(/@user\-(.*)/.exec(text));
      text = text.replace(/@user\-(.*)/gi,'<div class="user-name">$1</div>');

      text = marked(text);

      res.writeHead(200);
      res.write(noteView.html(user,fileName, text));
      res.end();
    });
  })
}

function add (pathInfo, req, res) {

  var postData = "";

  req.setEncoding("utf-8");
  req.addListener("data", function(postDataChunk) {
    postData += postDataChunk;
    console.log("\n\nrecieved post data chunk: %s", postDataChunk);
  });

  req.addListener("end", function() {
    var user = querystring.parse(postData).user,
        fileName = querystring.parse(postData).file,
        filePath = path.join(process.cwd(), 'public', 'notes', fileName + ".md"),
        text = querystring.parse(postData).text;

    text = "\n\n@user-" + user + "\n\n" + text;
    // add to file
    fs.appendFile(filePath, text, function (err) {
      console.log("added %s to %s", text, filePath);
    });
  });
}

// serve public css and js files
function asset (pathInfo, req, res) {
  var file = __dirname + '/public/' + pathInfo.fileType + '/' + pathInfo.file + '.' + pathInfo.fileType;

  fs.exists(file, function (exists) {
    if (!exists) {
      console.log("404: %s", file);
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.write("stylesheet not found");
      res.end();
      return
    }

    fs.readFile(file, function (err, data) {
      if (err) console.log(err);
      var type = 'text/' + pathInfo.fileType == 'css' ? 'css' : 'javascript';
      console.log("type = %s", type);
      res.writeHead(200, {'Content-Type': type});
      res.write(data);
      res.end();
    });
  })
}

exports.index = index;
exports.note = note;
exports.add = add;
exports.asset = asset;
