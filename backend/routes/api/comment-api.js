const router = require('express').Router();
const controller = require('../../controllers/comment-controller');

router.delete('/', controller.deleteComment);

module.exports = router;