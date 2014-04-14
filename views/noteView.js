function html (user, file, note) {
  return '<html>\
<html lang="en">\
<head>\
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\
    <script type="text/javascript" src="/public/js/note.js"></script>\
    <script type="text/javascript" src="/public/js/socket.io.js"></script>\
    <link rel="stylesheet" type="text/css" href="/public/css/style.css">\
    <title>note display</title>\
</head>\
<body>\
  <div id="content">' + note + '</div>\
  <textarea id="text" name="text" cols="60" rows="5"></textarea>\
  <input id="name" type="hidden" name="user" value="' + user + '" />\
  <input id="file" type="hidden" name="file" value="' + file + '" />\
  <div id="send" type="submit">enter</div>\
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
