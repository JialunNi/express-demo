var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});
router.get('/error', function (req, res, next) {
  res.render('error', {message: '妈的错啦', error: {status: 121, stack: 'jjjj'}});
});

module.exports = router;
