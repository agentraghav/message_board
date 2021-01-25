var express = require('express');
var router = express.Router();

var message = [
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

router.get('/new', function (req, res, next) {
  res.render('new', { title: 'New Message' });
});

router.post('/new', (req, res) => {
  message.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  try {
    res.redirect('/');
  } catch (e) {
    console.log(e);
    res.render('new');
  }
});

module.exports = router;
