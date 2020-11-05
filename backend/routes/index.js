const router = require('express').Router();
const auth = require('./auth');
require('../loaders/database-loader');

router.use('/auth', auth);

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
