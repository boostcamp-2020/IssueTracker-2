const router = require('express').Router();
const passport = require('passport');
const controller = require('../controllers/auth-controller');

router.get('/github', passport.authenticate('github'));
router.get('/github/callback', controller.loginGitHub);
router.get('/logout', controller.logout);

module.exports = router;
