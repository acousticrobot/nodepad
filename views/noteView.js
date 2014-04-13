function html (user, file, note) {
  return '<html> \
<html lang="en">\
<head>\
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\
    <script src="/public/js/note.js"></script>\
    <script src="/public/js/socket.io.js"></script>\
    <link rel="stylesheet" type="text/css" href="/public/css/style.css">\
    <title>note display</title>\
</head>\
<body>' +

  note +

  '<form action="/add" method="post">\
    <textarea name="text" cols="60" rows="5"></textarea>\
    <input type="hidden" name="user" value="' + user + '"/>\
    <input type="hidden" name="file" value="' + file + '"/>\
    <input type="submit" value="Enter" />\
  </form>\
</body>\
</html>'
}

function notFound (user,note) {
  return '<html> \
<html lang="en">\
<head>\
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\
    <link rel="stylesheet" type="text/css" href="/public/css/style.css">\
    <title>note display</title>\
</head>\
<body>\
  <h2>Sorry ' + user + ',</h2>\
  <h3>' + note + ' was not found.</h3>\
</body>\
</html>'
}

exports.html = html;
exports.notFound = notFound;
