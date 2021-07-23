var express = require('express');
var router = express.Router();
var db = require('../bin/db');

/* GET users listing. */
router.get('/', (req, res, next) => {
  db.query("SELECT * FROM Thoughts", (err, result, fields) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

router.post('/', (req, res, next) =>{
  db.query("INSERT INTO Thoughts(name, thought) VALUES(\""+req.body.name+"\", \""+req.body.thought+"\")", (err, result, fields) => {
    if (err) {
      res.status(400).send(err);
      throw err;
    };
    res.status(200).send();
  });
});

module.exports = router;
