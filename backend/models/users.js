const db = require('../db');

exports.create = async ({ id, profileImageUrl, password }) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql =
      'INSERT INTO users (id, profile_image_url, password) VALUES (?, ?, ?)';
    const [{ insertId }] = await connection.query(sql, [
      id,
      profileImageUrl,
      password,
    ]);
    connection.release();
    return insertId;
  } catch (err) {
    throw new Error(err);
  }
};

exports.findAll = async ({username}) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql = `SELECT * FROM users WHERE nickname=?`;
    const [[userInfo]] = await connection.query(sql, [
      username
    ]); 
    connection.release();
    return userInfo;
  } catch (err) {
    throw new Error(err);
  }
};
