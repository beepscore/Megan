var express = require('express');
var router = express.Router();

// videodata.json file contains a javascript object literal
var vd = require('../data/videodata.json');

/* GET home page. */
router.get('/', function(req, res, next) {

  // render views/index.ejs to index.html
  res.render('index', {
    title: 'Express',
    name: 'Bucky',
    videodata: vd
  });
});

module.exports = router;
