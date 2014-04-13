var http = require('http'),
    url = require('url'),
    pathParser = require('pathParser');

function start (route, handle) {

  function onRequest (req, res) {

    path = pathParser.parse(req);

    console.log("req: user: %s, path: %s", path["user"], path["pathname"]);

    route(handle, path, req, res);
  }

  http.createServer(onRequest).listen(8888, '127.0.0.1');

  console.log("server running on port 8888");
}

exports.start = start;
