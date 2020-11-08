const router = require('express').Router();
const controller = require('../../controllers/comment-controller');
const token = require('../../controllers/token-controller');

router.delete('/', controller.deleteComment);
router.put('/', controller.updateComment);
router.post('/', controller.addComment);
router.get('/', token.check, controller.test);


module.exports = router;
