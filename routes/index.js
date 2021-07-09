var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/commit-2', (req, res) => {
  res.status(200).json({'name':'commit-2'});
});

module.exports = router;
