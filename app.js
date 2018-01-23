const http = require('http');

var server = http.createServer(function (req, res) {
  console.log('Incoming request: ', req.url);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world');
});

server.listen(3000, '127.0.0.1');
console.log('Now listening on 127.0.0.1:3000');
