const db = require('../db');

exports.create = async ({
  issue_id,
  milestone_name,
  milestone_description,
  end_date,
}) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql =
      'INSERT INTO milestones (issue_id,milestone_name, milestone_description, end_date) VALUES (?,?, ?, ?)';
    const [{ insertId }] = await connection.query(sql, [
      issue_id,
      milestone_name,
      milestone_description,
      end_date,
    ]);
    connection.release();
    return insertId;
  } catch (err) {
    throw new Error(err);
  }
};
