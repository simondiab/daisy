var path = require('path');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/profile/:name', function(req, res) {
    res.render('profile', {person: req.params.name});
});

app.get('/league/:team/:player', function(req, res) {
    res.send('You asked to see the player profile for ' + req.params.player + ' who plays for ' + req.params.team );
});

app.listen(3000);