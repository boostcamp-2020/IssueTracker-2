const db = require('../db');

exports.getAll = async () => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql =
      'SELECT * FROM issues I JOIN milestones M ON I.milestone_id = M.id';
    const [milestones] = await connection.query(sql);
    connection.release();
    return milestones;
  } catch (err) {
    throw new Error(err);
  }
};
