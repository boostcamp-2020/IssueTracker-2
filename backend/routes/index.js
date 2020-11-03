const router = require('express').Router();
const auth = require('./auth');
const test = require('./test');

router.use('/auth', auth);
router.use('/test', test);

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
