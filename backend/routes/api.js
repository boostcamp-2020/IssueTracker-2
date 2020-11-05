const router = require('express').Router();
const userRouter = require('./api/user-api');
const labelRouter = require('./api/label-api');

router.use('/user', userRouter);
router.use('/label', labelRouter);

module.exports = router;
