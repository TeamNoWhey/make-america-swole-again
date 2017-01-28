var express = require('express');
var passport = require('passport');
//var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db.js');
var bodyParser = require('body-parser');

//Add back in once db file location is confirmed
//var db = require('wherever db is')
// var landingPage = require('./routes/landingPage')
// var workout = require ('./routes/workout');
// var feed = require ('./routes/feed');
// var login = require('./routes/login');
var path = require('path');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json() );

app.use(morgan('dev')); // o()xxxx[{::::::::::::::::::::::::::::::::::>
app.use(express.static(path.join(__dirname, '../client'))); // o()xxxx[{::::::::::::::::::::::::::::::::::>

// app.use('/', landingPage);
// app.use('/login', login);
// app.use('/workout', workout);
// app.use('/feed', feed);

app.post('/api/exercises', function(req, res) {
  console.log('This route is getting hit. Here\'s the requesttttt', req.body);
  res.status(200).end();
});

app.use(function(req, res) { // o()xxxx[{::::::::::::::::::::::::::::::::::> 
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});


app.use(function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(path.resolve(__dirname + '/../client/index.html'));
});


var port = process.env.PORT || 8080;
console.log('port:', port)

app.listen(port, function () {
  console.log('MASA is listening on port:', port)
})

module.exports = app;