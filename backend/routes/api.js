const router = require('express').Router();
const userRouter = require('./api/user-api');
const milestoneRouter = require('./api/milestone-api');

router.use('/user', userRouter);
router.use('/milestone', milestoneRouter);

module.exports = router;
