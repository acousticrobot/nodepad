function route(handle, path, req, res){
  console.log("routing: %s", path.pathname);

  if (typeof handle[path.pathname] === 'function') {

    handle[path.pathname](path, req, res);

  } else {

    res.writeHead(404, {"content" : "text/plain"});
    res.write("404 not found");
    res.end();
  };
}

exports.route = route;
