const db = require('../db');

exports.delete = async ({ id }) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql = 'DELETE FROM issues WHERE id = ?';
    const [{ insertId }] = await connection.query(sql, [id]);
    connection.release();
    return insertId;
  } catch (err) {
    throw new Error(err);
  }
};
