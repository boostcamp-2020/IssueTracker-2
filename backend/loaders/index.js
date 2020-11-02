module.exports = app => {
    require('./express-loader')(app);
    require('./passport-loader')();
};