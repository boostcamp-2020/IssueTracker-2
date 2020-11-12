const router = require('express').Router();
const auth = require('./auth');
const ios = require('./ios');
require('../loaders/database-loader');

router.use('/auth', auth);
router.use('/ios', ios);

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
