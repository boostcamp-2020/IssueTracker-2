const router = require('express').Router();
const controller = require('../controller/test-controller');

router.get('/add', controller.addUser);

module.exports = router;