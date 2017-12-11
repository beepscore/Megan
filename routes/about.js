var express = require('express');
var router = express.Router();


/* GET about page.*/
/* Note path construction. get() first argument is '/', render() first argument appends 'about'. */
router.get('/', function(req, res, next) {

  // render views/about.ejs to about.html
  res.render('about', {
    title: 'About',
    name: 'Bucky'
  });
});

module.exports = router;
