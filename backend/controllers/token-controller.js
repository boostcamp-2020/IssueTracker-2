const passport = require('passport');

exports.check = (req, res, next) => {
  const de = 1; 
  passport.authenticate('jwt', function (err, user, info) {
    if (err) {
      return next(err);
    }

    if(!user) {
      res.status(400).json({ message: info.message });
    }

    res.cookie('id', user.nickname);
    next();
    
  })(req, res, next);
};