const router = require('express').Router();
const controller = require('../../controllers/comment-controller');

router.put('/', controller.updateComment);

module.exports = router;