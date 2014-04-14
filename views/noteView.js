function html (user, file, note) {
  return '<html>\
<html lang="en">\
<head>\
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\
    <script type="text/javascript" src="/public/js/run-prettify.js"></script>\
    <script type="text/javascript" src="/public/js/prettify.js"></script>\
    <script type="text/javascript" src="/public/js/note.js"></script>\
    <script type="text/javascript" src="/public/js/socket.io.js"></script>\
    <link rel="stylesheet" type="text/css" href="/public/css/style.css">\
    <title>' + file + '</title>\
</head>\
<body>\
  <header>User: ' + user + ' file: ' + file + '</header>\
  <div id="content">' + note + '</div>\
  <div id="note-form">\
  <textarea id="text" name="text" cols="60" rows="5"></textarea>\
  <input id="name" type="hidden" name="user" value="' + user + '" />\
  <input id="file" type="hidden" name="file" value="' + file + '" />\
  <div id="send-text" type="submit">enter text</div>\
  <div id="send-code" type="submit">enter code</div>\
  </div>\
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
