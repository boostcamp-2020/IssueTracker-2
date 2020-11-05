const router = require('express').Router();
const userRouter = require('./api/user-api');
const labelRouter = require('./api/label-api');
const milestoneRouter = require('./api/milestone-api');
const commentRouter = require('./api/comment-api');

router.use('/user', userRouter);
router.use('/comment', commentRouter);
router.use('/milestone', milestoneRouter);
router.use('/label', labelRouter);

module.exports = router;
