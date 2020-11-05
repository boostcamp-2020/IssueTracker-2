const db = require('../db');

exports.update = async ({
  id,
  issue_id,
  milestone_name,
  milestone_description,
  end_date,
}) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql =
      'UPDATE milestones SET issue_id=? , milestone_name=?, milestone_description=?, end_date=? WHERE id= ?';
    const [{ insertId }] = await connection.query(sql, [
      issue_id,
      milestone_name,
      milestone_description,
      end_date,
      id,
    ]);
    connection.release();
    return insertId;
  } catch (err) {
    throw new Error(err);
  }
};
