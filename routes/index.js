var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'inventory',
  debug: false
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testconnect', (req, res, next) => {
  if (db != null) {
    res.send('Connection Success');
  } else {
    res.send('Connection Failed');
  }
});

router.get('/select', (req, res, next) => {
  db.query('SELECT * FROM items', (err, rs) => {
    res.render('select', { items: rs });
  });
});
module.exports = router;
