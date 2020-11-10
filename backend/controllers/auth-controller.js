const passport = require('passport');
const jwt = require('jsonwebtoken');
const { redirectURL } = require('../config/index');

exports.loginGitHub = (req, res, next) => {
  passport.authenticate('github', function (err, user, info) {
    if (err) {
      return next(err);
    }

    const payload = { id: user.sid, nickname: user[0] };
    const secret = 'secret';
    const options = { expiresIn: '7d', subject: 'userInfo' };
    const token = jwt.sign(payload, secret, options);

    if (req.headers['user-agent'].includes('iPhone')) {
      return res.redirect(`issuetrackerpastel://${token}`);
    }

    if (!user) {
      return res.redirect(redirectURL);
    }

    res.cookie('jwt', token);
    res.redirect(redirectURL);
  })(req, res, next);
};

exports.logout = (req, res, next) => {
  res.clearCookie('jwt');
  res.status(202).json({ message: 'logout successfully' });
};

exports.loginPassport = (req, res, next) => {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return next(err);
    }

    if (!user) {
      res.status(401).json({ message: info.message });
    }

    /**
     * jwt 토큰 발급
     * jwt.sign(payload, secretOrPrivateKey, [options, callback])
     */
    const payload = { id: user.sid, nickname: user.nickname };
    const secret = 'secret';
    const options = { expiresIn: '7d', subject: 'userInfo' };
    const token = jwt.sign(payload, secret, options);
    res.cookie('jwt', token);
    res.status(202).json({ message: 'logged in successfully' });
  })(req, res, next);
};
