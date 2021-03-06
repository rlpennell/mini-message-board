var express = require('express');
var router = express.Router();
const hbs = require('hbs');
const data = require('../src/data');

const { messages } = data;

hbs.registerHelper('messageCount', () => {
  const count = messages.filter(message => message.isNew).length;
  return `${count} new message${count > 1 ? 's' : ''}`;
});

hbs.registerHelper('formatDate', date => data.formatDate(date));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Mini Message Board',
    messages,
  });
});

module.exports = router;
