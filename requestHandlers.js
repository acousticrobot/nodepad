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
      notepath = path.join(process.cwd(), 'notes', pathInfo.note),
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

    // res.writeHead(200, {'content-type': 'text/html'});
    // res.write(noteView.html(user,notepath));
    // res.end();
  })
}

exports.index = index;
exports.note = note;
