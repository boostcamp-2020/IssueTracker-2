const passport = require('passport');
const jwt = require('jsonwebtoken');

exports.loginGitHub = (req, res, next) => {
  passport.authenticate('github', function (err, user, info) {
    if (err) {
      return next(err);
    }

    if (req.headers['user-agent'].includes('iPhone')) {
      console.log('iphone here');
      return res.redirect(`issuetrackerpastel://${token}`);
    }

    // redirect 주소 수정 필요
    if (!user) {
      return res.redirect('http://localhost:8080');
    }

     /**
      * jwt 토큰 발급
      * jwt.sign(payload, secretOrPrivateKey, [options, callback])
      */
     const payload = { id: user.sid, nickname: user.nickname };
     const secret = 'secret';
     const options = { expiresIn: '7d', subject: 'userInfo' };
     const token = jwt.sign(payload, secret, options);

    // redirect 주소 수정 필요
    res.redirect('http://localhost:8080/?valid=' + token);
  })(req, res, next);
};

exports.logout = (req, res, next) => {
  res.clearCookie('jwt'); 
  res.status(202).json({ message: 'logout successfully' });
};




