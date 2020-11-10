const router = require('express').Router();
const controller = require('../../controllers/label-controller');

router.get('/', controller.readLabel);
router.delete('/', controller.deleteLabel);

router.patch('/', controller.updateLabel);

router.post('/', controller.addLabel);


module.exports = router;
