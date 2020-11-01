const router = require('express').Router();
const passport = require('passport');
const controller = require('../controller/auth-controller');

router.get('/github', passport.authenticate('github'));
router.get('/github/callback', controller.loginGitHub);

module.exports = router;