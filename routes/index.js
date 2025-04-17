var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const values=["cr7","lm10","njr"]
  res.render('index', { values });
});

module.exports = router;
