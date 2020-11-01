const passport = require('passport');

exports.loginGitHub = (req, res, next) => {
    res.cookie('user', req.user);
    res.redirect('http://localhost:8080');
};