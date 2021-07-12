var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "admin_thoughts",
  password: "Thoughts321?",
  database: "myappThinking"
});

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query("SELECT * FROM Thoughts", (err, result, fields) => {
    if (err) throw err;
    res.render('index', { title: 'Express', thoughts: result.reverse()});
  });
});

module.exports = router;
