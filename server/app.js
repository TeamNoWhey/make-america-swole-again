var express = require('express');
var path = require('path');
var passport = require('passport');
//var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db.js');

//Add back in once db file location is confirmed
//var db = require('wherever db is')
// var landingPage = require('./routes/landingPage')
// var workout = require ('./routes/workout');
// var feed = require ('./routes/feed');
// var login = require('./routes/login');
var path = require('path');
var app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client')));

// app.use('/', landingPage);
// app.use('/login', login);
// app.use('/workout', workout);
// app.use('/feed', feed);

app.use(function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(path.resolve(__dirname + '/../client/index.html'));
});

app.use(function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(path.resolve(__dirname + '/../client/index.html'));
});
//error handler
// app.use(function(err, res, req, next){
<<<<<<< HEAD
//  res.status(err.status || 500);
=======
// 	res.status(err.status || 500);
>>>>>>> b502046e1e4f734c2957bbd6c1f3e5056f5364be
//     res.render('error', {
//         message: err.message,
//         error: err
//     });
// })

var port = process.env.PORT || 8080;
console.log('port:', port)

app.listen(port, function () {
  console.log('MASA is listening on port:', port)
})

module.exports = app;