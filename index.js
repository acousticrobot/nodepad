var server = require('server'),
    router = require('router'),
    requestHandlers = require('requestHandlers');

var handle = {}

handle["/"] = requestHandlers.index;
handle["/note"] = requestHandlers.note;
handle["/add"] = requestHandlers.add;
handle["/asset"] = requestHandlers.asset;

server.start(router.route, handle);
