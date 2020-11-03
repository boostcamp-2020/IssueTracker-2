const router = require('express').Router();
const userRouter = require('./user-api');

router.use('/user', userRouter);

module.exports = router;