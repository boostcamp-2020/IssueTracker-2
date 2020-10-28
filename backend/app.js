const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors = require('cors');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

passport.use(
  new GitHubStrategy(
    {
      clientID: '90378370d90a50bc65ff',
      clientSecret: 'edb476d8dffa6416b25bde598894a4170f36c99b',
      callbackURL: 'http://localhost:3000/auth/github/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      const user = profile.username;
      // db 설정
      /* User.findOrCreate({ githubId: profile.id }, function (err, user) {
        return cb(err, user);
      }); */
      return cb(null, user);
    },
  ),
);

app.get('/auth/github', passport.authenticate('github'));

app.get(
  '/auth/github/callback',
  passport.authenticate('github', { session: null }),
  (req, res) => {
    // console.log(req.user);
    // console.log(res);
    res.cookie('user', req.user);
    res.redirect('http://localhost:8080');
  },
);

module.exports = app;
