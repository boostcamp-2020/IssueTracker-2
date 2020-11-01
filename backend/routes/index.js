const router = require('express').Router();
const auth = require('./auth');

router.use('/auth', auth);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
