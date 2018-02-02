var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');

var app = express();
var urlEncodedParser = bodyParser.urlencoded({
    extended: false
});
app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

// app.use(function (req,res,next) {
//     res.status('404').render('404');
// });

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/contact', function (req, res) {
    console.log(req.query);
    res.render('contact', {
        qs: req.query
    });
});

app.post('/contact', urlEncodedParser, function (req, res) {
    console.log(req.body);
    res.render('contact', {
        qs: req.query
    });
});

app.get('/profile/:name', function (req, res) {
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

app.get('/league/:team/:player', function (req, res) {
    res.send('You asked to see the player profile for ' + req.params.player + ' who plays for ' + req.params.team );
});

app.listen(3000);