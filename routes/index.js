var express = require('express');
var router = express.Router();

/* GET home page. */

const message = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hi there!',
    user: 'Charles',
    added: new Date(),
  },
];

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Message Board', message: message });
});

module.exports = router;
