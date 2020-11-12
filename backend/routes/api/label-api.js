const router = require('express').Router();
const controller = require('../../controllers/label-controller');
const token = require('../../controllers/token-controller');

router.get('/', controller.readLabel);
router.delete('/', controller.deleteLabel);
router.put('/', controller.updateLabel);
router.post('/', controller.addLabel);

module.exports = router;
