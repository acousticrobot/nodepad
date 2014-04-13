function html (user, title, note) {
  return '<html> \
<html lang="en">\
<head>\
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\
    <title>note display</title>\
</head>\
<body>\
  <p>user: ' + user + '</p>\
  <p>note: ' + title + '</p>' + note +
'</body>\
</html>'
}

function notFound (user,note) {
  return '<html> \
<html lang="en">\
<head>\
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\
    <title>note display</title>\
</head>\
<body>\
  <p>Sorry ' + user + ',</p>\
  <p>' + note + ' was not found.</p>\
</body>\
</html>'
}

exports.html = html;
exports.notFound = notFound;
