const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

module.exports = app => {
  app.use(cors());
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, '../public')));
  
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

};
