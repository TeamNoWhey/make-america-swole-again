var express = require('express');
var app = express();
var path = require('path');

// var middleware = require('./config/middleware.js')(app, express);
// var routes = require('./config/routes.js')(app, express);

var port = process.env.PORT || 8080;
var server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);

//app.listen(8080)
});

module.exports = app;