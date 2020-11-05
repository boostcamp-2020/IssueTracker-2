const router = require('express').Router();
const controller = require('../../controllers/comment-controller');

router.post('/', controller.addComment);

module.exports = router;
