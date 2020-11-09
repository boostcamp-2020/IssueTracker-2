const router = require('express').Router();
const controller = require('../../controllers/label-controller');

router.get('/', controller.readLabel);
router.delete('/', controller.deleteLabel);

module.exports = router;
