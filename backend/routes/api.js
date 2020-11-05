const router = require('express').Router();
const userRouter = require('./api/user-api');
const labelRouter = require('./api/label-api');
const milestoneRouter = require('./api/milestone-api');

router.use('/user', userRouter);
router.use('/milestone', milestoneRouter);
router.use('/label', labelRouter);

module.exports = router;
