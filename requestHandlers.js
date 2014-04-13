function index(req, res){
  console.log('handle:index');

  res.writeHead(200, {'content-type': 'text/plain'});
  res.write("it works!");
  res.end();
}

exports.index = index;
