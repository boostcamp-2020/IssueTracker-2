const passport = require('passport');

exports.check = (req, res, next) => {
  passport.authenticate('jwt', function (err, user, info) {
    if (err) {
      return next(err);
    }

    if(!user) {
      res.status(401).json({ message: info.message });
    }

    res.cookie('id', user.nickname);
    next();
    
  })(req, res, next);
};