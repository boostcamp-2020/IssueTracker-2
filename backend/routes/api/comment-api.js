const router = require('express').Router();
const controller = require('../../controllers/comment-controller');

router.put('/', controller.updateComment);
router.post('/', controller.addComment);

module.exports = router;
