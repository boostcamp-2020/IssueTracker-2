const router = require('express').Router();
const controller = require('../../controllers/label-controller');

router.get('/', controller.readLabel);
router.patch('/', controller.updateLabel);

module.exports = router;
