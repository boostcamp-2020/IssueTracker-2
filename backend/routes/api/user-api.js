const router = require('express').Router();
const controller = require('../../controllers/user-controller');

router.get('/', controller.getNowUser);
router.post('/', controller.addUser);
router.post('/login', controller.loginPassport);
router.get('/all', controller.getAllUser);

module.exports = router;
