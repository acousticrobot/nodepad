var noteView = require('views/noteView'),
    path = require('path'),
    fs = require('fs'),
    marked = require('marked');

function index(pathInfo, req, res){
  console.log('handle:index');

  res.writeHead(200, {'content-type': 'text/plain'});
  res.write("enter a nodepad: /your user name/note");
  res.end();
}

function note (pathInfo, req, res) {

  var noteTitle = pathInfo.note.substr(0, pathInfo.note.length - 3), // remove .md
      notepath = path.join(process.cwd(), 'public', 'notes', pathInfo.note),
      user = unescape(pathInfo.user);

  fs.exists(notepath, function (exists) {

    if (!exists) {
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write(noteView.notFound(user,noteTitle));
      res.end();
      return;
    }

    fs.readFile(notepath, "binary", function(err, file) {
      if(err) {
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.write(err + "\n");
        res.end();
        return;
      }

      file = marked(file);

      res.writeHead(200);
      res.write(noteView.html(user,notepath,file));
      res.end();
    });
  })
}

function css (pathInfo, req, res) {
  var file = __dirname + '/public/css/' + pathInfo.file + '.css';

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
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  })
}

exports.index = index;
exports.note = note;
exports.css = css;
