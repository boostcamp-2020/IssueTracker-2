const router = require('express').Router();
const controller = require('../../controllers/user-controller');

router.get('/', controller.getNowUser);
router.post('/', controller.addUser);
router.post('/login', controller.loginPassport);

module.exports = router;
