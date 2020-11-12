const router = require('express').Router();
const controller = require('../../controllers/comment-controller');
const token = require('../../controllers/token-controller');

router.delete('/', token.check, controller.deleteComment);
router.put('/', token.check, controller.updateComment);
router.post('/', token.check, controller.addComment);

module.exports = router;
