// var http = require('http');
// var fs = require('fs');
// var path = require('path');

// var server = http.createServer(function (req, res) {
//     console.log('Incoming request: ', req.url);
//     if (req.url === '/home' || req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         var myReadStream = fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
//     } else if (req.url === '/api') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         var jsonObj = {
//             quote: 'Annual income twenty pounds, annual expenditure nineteen pounds nineteen and six, result happiness. Annual income twenty pounds, annual expenditure twenty pounds nought and six, result misery.',
//             character: 'Wilkins Micawber',
//             work: 'David Copperfield',
//             creator: 'Charles Dickens',
//         };
//         res.end(JSON.stringify(jsonObj));
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         var myReadStream = fs.createReadStream(path.join(__dirname, '404.html')).pipe(res);
//     }
// });
// server.listen(3000, '127.0.0.1');
// console.log('Now listening on 127.0.0.1:3000');

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('This is a message');
});

app.get('/contact', function (req, res) {
    res.send('This is the contact page');
});

app.get('/profile/:id', function(req, res) {
    res.send('You asked for the profile with ID: ' + req.params.id);
});

app.get('/league/:team/:player', function(req, res) {
    res.send('You asked to see the player profile for ' + req.params.player + ' who plays for ' + req.params.team );
});
app.listen(3000);