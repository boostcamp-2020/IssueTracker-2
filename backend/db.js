const mysql = require('mysql2/promise');
const config = require('./config');

const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  database: config.database,
  password: config.password,
});

exports.pool = pool;
