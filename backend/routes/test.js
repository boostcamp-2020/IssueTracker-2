const router = require('express').Router();
const controller = require('../controllers/test-controller');

router.get('/add', controller.addUser);

module.exports = router;
