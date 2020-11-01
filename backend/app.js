const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors = require('cors');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const config = require('./config');

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
      clientID: config.clientID,
      clientSecret: config.clientSecret,
      callbackURL: config.clientURL
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
