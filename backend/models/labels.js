const db = require('../db');

exports.read = async () => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql = `SELECT * FROM labels`;
    const labelListResult = await connection.query(sql);

    connection.release();
    return labelListResult[0];
  } catch (err) {
    throw new Error(err);
  }
};

exports.update = async ({ id }) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql = 'DELETE FROM labels WHERE id = ?';
    const [{ deleteLabelId }] = await connection.query(sql, [id]);
    connection.release();
    return deleteLabelId;
  } catch (err) {
    throw new Error(err);
  }
};
