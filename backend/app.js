const express = require('express');
const loaders = require('./loaders');
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const app = express();

loaders(app);

app.use('/', indexRouter);
app.use('/api', apiRouter);

module.exports = app;
