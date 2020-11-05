const router = require('express').Router();
const userRouter = require('./api/user-api');
const commentRouter = require('./api/comment-api');

router.use('/user', userRouter);
router.use('/comment', commentRouter);

module.exports = router;
