var notepage = require('templates/note');

function index(path, req, res){
  console.log('handle:index');

  res.writeHead(200, {'content-type': 'text/plain'});
  res.write("enter a url: /:user/note");
  res.end();
}

function note (path, req, res) {
  res.writeHead(200, {'content-type': 'text/html'});
  res.write(notepage.html(path));
  res.end();
}

exports.index = index;
exports.note = note;
