const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const config = require('../config');

const githubConfig = { 
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: config.clientURL 
};

const verifyGitHub = (accessToken, refreshToken, profile, cb) => {
    const user = profile.username;
    return cb(null, user);
};

module.exports = () => {
  passport.use(new GitHubStrategy(githubConfig, verifyGitHub));
};
