var express = require('express');
var router = express.Router();

// dummy data

var message = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
    id: 1,
  },
  {
    text: 'Hi there!',
    user: 'charles',
    added: new Date(),
    id: 2,
  },
];

// home page get route

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Message Board', message: message });
});

// new form page get route

router.get('/new', function (req, res, next) {
  res.render('new', { title: 'New Message' });
});

// form page post route

router.post('/new', (req, res) => {
  message.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
    id: Date.now(),
  });
  try {
    res.redirect('/');
  } catch (e) {
    console.log(e);
    res.render('new');
  }
});

// delete route

router.delete('/:id', (req, res, next) => {
  for (let i = 0; i < message.length; i++) {
    if (message[i].id === Number(req.params.id)) {
      message.splice(i, 1);
    }
  }
  res.redirect('/');
});

module.exports = router;
