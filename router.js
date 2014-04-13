function route(handle, pathname, req, res){
  console.log("routing: %s", pathname);

  if (typeof handle[pathname] === 'function') {

    handle[pathname](req, res);

  } else {

    res.writeHead(404, {"content" : "text/plain"});
    res.write("404 not found");
    res.end();
  };
}


exports.route = route;
