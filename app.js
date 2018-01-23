var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function (req, res) {
  console.log('Incoming request: ', req.url);
  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var myReadStream = fs.createReadStream(path.join(__dirname, 'index.html'));
    myReadStream.pipe(res);
  } else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var jsonObj = {
      quote: 'Annual income twenty pounds, annual expenditure nineteen pounds nineteen and six, result happiness. Annual income twenty pounds, annual expenditure twenty pounds nought and six, result misery.',
      character: 'Wilkins Micawber',
      work: 'David Copperfield',
      creator: 'Charles Dickens',
    };
    res.end(JSON.stringify(jsonObj));
  }
});
server.listen(3000, '127.0.0.1');
console.log('Now listening on 127.0.0.1:3000');


