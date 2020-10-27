var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const passport = require('passport');

var GitHubStrategy = require('passport-github').Strategy;

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

passport.use(new GitHubStrategy({
    clientID: "d0c795748a8b44c86b63",
    clientSecret: "e0106b8d76a9bc2d3b677ac56740ca58531ef9a2",
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
      //db 설정
    /*User.findOrCreate({ githubId: profile.id }, function (err, user) {
        return cb(err, user);
      });*/
  }
));

app.get('/auth/github', passport.authenticate('github'));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home

    res.redirect('/');
  });

module.exports = app;