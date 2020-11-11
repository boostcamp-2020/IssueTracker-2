const passport = require('passport');
const jwt = require('jsonwebtoken');
const service = require('../services/user-service');

exports.getNowUser = async (req, res, next) => {
  try {
    console.log(req.cookies);
    const { status, message, insertId } = await service.userService(req);
    res.status(status).json({ message, insertId });
  } catch (err) {
    next(err);
  }
};

exports.addUser = async (req, res, next) => {
  try {
    const { status, message, insertId } = await service.userService(req);
    res.status(status).json({ message, insertId });
  } catch (err) {
    next(err);
  }
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

    if (req.headers['user-agent'].includes('iPhone')) {
      return res.redirect(`issuetrackerpastel://${token}`);
    }

    res.cookie('jwt', token);
    res.status(202).json({ message: 'logged in successfully' });
  })(req, res, next);
};
