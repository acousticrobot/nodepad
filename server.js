var http = require('http'),
    url = require('url'),
    scribe = require('scribe');


function start (route, handle) {

  function onRequest (req, res) {

    console.log("--------- incoming: -----------");
    route(handle, req, res);
  }

  var io = require('socket.io').listen(http.createServer(onRequest).listen(8888, '127.0.0.1'));

  io.sockets.on('connection', function(socket){
    socket.on('send', function(data){

      var message = scribe.record(data);
      io.sockets.emit('message', message);

    })
  })

  console.log("server running on port 8888");
}

exports.start = start;
