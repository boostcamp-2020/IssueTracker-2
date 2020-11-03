const router = require('express').Router();
const userRouter = require('./api/user-api');

router.use('/user', userRouter);

module.exports = router;
