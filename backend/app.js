const express = require('express');
const loaders = require('./loaders');
const indexRouter = require('./routes/index');

const app = express();

loaders(app);

app.use('/', indexRouter);

module.exports = app;



