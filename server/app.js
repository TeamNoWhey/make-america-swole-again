var express = require('express');
var path = require('path');
var passport = require('passport');
//var bodyParser = require('body-parser');
var morgan = require('morgan');

//Add back in once db file location is confirmed
//var db = require('wherever db is')
var main = require('./routes/main')
var workout = require ('./routes/workout');
var feed = require ('./routes/feed');
var login = require('./routes/login');
var app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use('/', main);
app.use('/login', login);
app.use('/workout', workout);
app.use('/feed', feed);


//handler for client side error
app.use(function(req, res, next){
  var err = new Error(`404: ${req.originalUrl} has not been found. Please try another url`);
  err.status = 404;
  next(err);
});

//handler for server side error
app.use(function(err, req, res, next){
	res.status(500).send({
    message: err.message,
    error: err
  });
})

var port = process.env.PORT || 8080;
console.log('port:', port)

app.listen(port, function () {
  console.log('MASA is listening on port:', port)
})

module.exports = app;