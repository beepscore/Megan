var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // render views/index.ejs to index.html
  res.render('index', {
    title: 'Express',
    name: 'Bucky'
  });
});

module.exports = router;
