const express = require('express');
const loaders = require('./loaders');
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const app = express();

loaders(app);

app.use('/', indexRouter);
app.use('/api', apiRouter);

/**
 * 오류 처리 미들웨어
 */
app.use(function(err, req, res, next) {
console.error(err.stack);
res.status(500).send('500 Something broke!');
});

app.use(function(req, res, next){
res.statusCode = 404;
res.status(500).send('404 Not Found!');
}) 

module.exports = app;
