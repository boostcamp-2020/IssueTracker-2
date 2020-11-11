const db = require('../db');

exports.create = async ({ issue_id, assignee_id }) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql =
      'INSERT INTO issue_assignees (issue_id, assignee_id) VALUES ( ?, ?)';
    const [{ insertId }] = await connection.query(sql, [issue_id, assignee_id]);
    connection.release();
    return insertId;
  } catch (err) {
    throw new Error(err);
  }
};
