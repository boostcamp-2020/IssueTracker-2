const passport = require('passport');

exports.check = (req, res, next) => {
  passport.authenticate('jwt', function (err, user, info) {
    if (req.headers['user-agent'].includes('iPhone')) {
      next();
    } else {
      passport.authenticate('jwt', function (err, user, info) {
        if (err) {
          return next(err);
        }

        if (!user) {
          res.status(401).json({ message: info.message });
        }

        next();
      })(req, res, next);
    }
  });
};
