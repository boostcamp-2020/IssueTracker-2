const router = require('express').Router();
const controller = require('../controllers/ios-controller');

router.get('/register', controller.login);

module.exports = router;
