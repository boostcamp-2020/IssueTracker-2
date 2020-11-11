const db = require('../db');

exports.create = async ({ issue_id, label_name }) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql = 'INSERT INTO issue_labels (issue_id, label_name) VALUES ( ?, ?)';
    const [{ insertId }] = await connection.query(sql, [issue_id, label_name]);
    connection.release();
    return insertId;
  } catch (err) {
    throw new Error(err);
  }
};
