const db = require('../db');

exports.create = async (connection, { issue_id, label_id }) => {
  try {
    let sql = 'INSERT INTO issue_labels (issue_id, label_id) VALUES ( ?, ?)';
    const [{ insertId }] = await connection.query(sql, [issue_id, label_id]);
    connection.release();
    return insertId;
  } catch (err) {
    throw new Error(err);
  }
};
