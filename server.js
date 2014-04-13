var http = require('http'),
    url = require('url');

function start (route, handle) {

  function onRequest (req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log("req: %s", pathname);

    route(handle, pathname, req, res);
  }

  http.createServer(onRequest).listen(8888, '127.0.0.1');

  console.log("server running on port 8888");
}

exports.start = start;
