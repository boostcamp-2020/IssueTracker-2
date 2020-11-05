const router = require('express').Router();
const controller = require('../../controllers/comment-controller');

router.delete('/', controller.deleteComment);
router.put('/', controller.updateComment);
router.post('/', controller.addComment);

module.exports = router;
