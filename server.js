var http = require('http'),
    io = require('socket.io'),
    url = require('url');

function start (route, handle) {

  function onRequest (req, res) {

    console.log("--------- incoming: -----------");
    route(handle, req, res);
  }

  io.listen(http.createServer(onRequest).listen(8888, '127.0.0.1'));

  console.log("server running on port 8888");
}

exports.start = start;
