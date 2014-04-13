function html (path) {
  return '<html> \
<html lang="en">\
<head>\
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\
    <title>note display</title>\
</head>\
<body>\
  <p>user: ' + path.user + '</p>\
  <p>note: ' + path.note + '</p>\
</body>\
</html>'
}

exports.html = html;
