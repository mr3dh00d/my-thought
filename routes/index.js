var express = require('express');
var router = express.Router();
var db = require('../bin/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query("SELECT * FROM Thoughts", (err, result, fields) => {
    if (err) throw err;
    res.render('index', { title: 'Express', thoughts: result.reverse()});
  });
});

module.exports = router;
