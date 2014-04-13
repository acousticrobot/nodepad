var server = require('server'),
    router = require('router'),
    requestHandlers = require('requestHandlers');

var handle = {}

handle["/"] = requestHandlers.index;
handle["/note"] = requestHandlers.note;
handle["/css"] = requestHandlers.css;

server.start(router.route, handle);
