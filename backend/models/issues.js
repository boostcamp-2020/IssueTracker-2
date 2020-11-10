const db = require('../db');

exports.update = async ({
  id,
  user_sid,
  issue_content,
  issue_name,
  created_at,
  milestone_id,
  issue_status,
}) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql =
      'UPDATE issues SET user_sid=? , issue_content=?, issue_name=?, created_at=?, milestone_id=?,issue_status=? WHERE id= ?';
    const [{ insertId }] = await connection.query(sql, [
      user_sid,
      issue_content,
      issue_name,
      created_at,
      milestone_id,
      issue_status,
      id,
    ]);
    connection.release();
    return insertId;
  } catch (err) {
    throw new Error(err);
  }
};

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
