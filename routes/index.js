console.log('running routes/index.js...')

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./index.ejs');
});

router.get('/about', function(req, res, next) {
  res.render('./about.ejs');
});
router.get('/contact-me', function(req, res, next) {
  res.render('./contact-me.ejs');
});

module.exports = router;
