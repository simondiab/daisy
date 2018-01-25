var path = require('path');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
   res.render('index');
});

app.get('/contact', function (req, res) {
   res.render('contact');
});

app.get('/profile/:name', function(req, res) {
    var data = {
        age: 29,
        job: 'teacher',
        subjects: ['Maths', 'Mathematics', 'Math'],
    }
    res.render('profile', {
        person: req.params.name,
        data: data
    });
});

app.get('/league/:team/:player', function(req, res) {
    res.send('You asked to see the player profile for ' + req.params.player + ' who plays for ' + req.params.team );
});

app.listen(3000);