const router = require('express').Router();
const passport = require('passport');
const controller = require('../controller/auth-controller');

router.get('/github', passport.authenticate('github'));
router.get('/github/calback', passport.authenticate('github', { session: null }), controller.loginGitHub);

module.exports = router;