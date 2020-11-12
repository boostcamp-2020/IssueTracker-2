const router = require('express').Router();
const controller = require('../../controllers/label-controller');
const token = require('../../controllers/token-controller');

router.get('/', token.check, controller.readLabel);
router.delete('/', token.check, controller.deleteLabel);
router.put('/', token.check, controller.updateLabel);
router.post('/', token.check, controller.addLabel);
router.get('/all', token.check, controller.readLabel);

module.exports = router;
