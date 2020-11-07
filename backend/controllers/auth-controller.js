const passport = require('passport');

exports.loginGitHub = (req, res, next) => {
  passport.authenticate('github', function (err, user, info) {
    if (err) {
      return next(err);
    }

    if (req.headers['user-agent'].includes('iPhone')) {
      console.log('iphone here');
      return res.redirect(`issuetrackerpastel://${user}`);
    }

    // redirect 주소 수정 필요
    if (!user) {
      return res.redirect('http://localhost:8080');
    }

    /**
     * 토큰 생성 부분 넣으면 될 듯
     * req.logIn(user, function(err) {
     *     if (err) { return next(err); }
     *     return res.redirect('/users/' + user.username);
     * });
     */

    res.cookie('user', user);

    // redirect 주소 수정 필요
    res.redirect('http://localhost:8080');
  })(req, res, next);
};
