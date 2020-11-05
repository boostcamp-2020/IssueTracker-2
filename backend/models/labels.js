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
