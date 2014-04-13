var url = require('url');


function parse (req) {
  var fullpath = url.parse(req.url).pathname,
      userReg = /\/([^\/]+)\/(.*)/;

  // Check for known routes:

  //-> /
  if (fullpath === '/') {
    console.log("routing to index");
    return {
      user: null,
      pathname: '/'
    }
  }

  //-> public/css/style.css
  if (fullpath.indexOf('.css') != -1) {
    var file = /([^\/]*)\.css/.exec(fullpath)[1];
    console.log("loading %s.css", file);
    return {
      file: file,
      pathname: '/css'
    }
  }

  //-> /:user/pathname

  var pathWithUser = userReg.exec(fullpath);

  if (pathWithUser === null) {
    return {
      user: null,
      pathname: null
    }
  } else {

    console.log("routing to User: %s, Note: %s", unescape(pathWithUser[1]), pathWithUser[2]);
    return {
      user: pathWithUser[1],
      note: pathWithUser[2] + '.md',
      pathname: '/note'
    }
  }
}

function route(handle, req, res){

  var path = parse(req);
  console.log("handler: %s", path.pathname);

  if (typeof handle[path.pathname] === 'function') {

    handle[path.pathname](path, req, res);

  } else {

    res.writeHead(404, {"content" : "text/plain"});
    res.write("404 not found");
    res.end();
  };
}

exports.route = route;
