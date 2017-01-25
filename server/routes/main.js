console.log('This is landing page')
// console.log(__dirname);
var express = require('express');
var path = require('path');
var router = express.Router();


router.get('/', function (req, res, next){
  //res.send('hello');
  res.sendFile(path.join(__dirname + '/../../index.html'));
})

module.exports = router;
