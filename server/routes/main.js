console.log('This is landing page')
var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../index.js'));
})

module.exports = router;
