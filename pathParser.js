var url = require('url');


function parse (req) {
  var fullpath = url.parse(req.url).pathname,
      userReg = /\/([^\/]+)\/(.*)/;

  // Check for known routes:

  if (fullpath === '/') {
    console.log("parsed as index");
    return {
      user: null,
      pathname: '/'
    }
  }

  // /:user/pathname

  var pathWithUser = userReg.exec(fullpath);

  console.log("pathWithUser:" + pathWithUser);

  if (pathWithUser === null) {
    return {
      user: null,
      pathname: null
    }
  } else {
    return {
      user: pathWithUser[1],
      note: pathWithUser[2],
      pathname: '/note'
    }
  }
}

exports.parse = parse;
