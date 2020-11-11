const db = require('../db');
const util = require('../util');

exports.create = async ({
  milestone_name,
  milestone_description,
  end_date,
  status,
}) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql =
      'INSERT INTO milestones (milestone_name, milestone_description, end_date, created_at,status) VALUES ( ?, ?, ?,?,?)';
    const [{ insertId }] = await connection.query(sql, [
      milestone_name,
      milestone_description,
      end_date,
      util.now(),
      status,
    ]);
    connection.release();
    return insertId;
  } catch (err) {
    throw new Error(err);
  }
};

exports.getAll = async ({ status }) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql = `
    select t3.id, t3.milestone_name, t3.milestone_description, DATE_FORMAT(t3.end_date,'%Y-%m-%d') as end_date, t3.status, IFNULL(t1.count, 0) as open_count, IFNULL(t2.count, 0) as close_count
    from milestones as t3
    left join 
    (
      select m.id as id, count(*) as count
      from milestones as m
      join issues as i
      on m.id = i.milestone_id
      where i.issue_status = 0
      group by m.id
    ) as t1
    on t1.id = t3.id
    left join
    (
      select m.id as id, count(*) as count
      from milestones as m
      join issues as i
      on m.id = i.milestone_id
      where i.issue_status = 1
      group by m.id
    ) as t2 
    on t1.id = t2.id
    where t3.status = ?
    `;

    const [milestones] = await connection.query(sql, [status]);
    connection.release();
    return milestones;
  } catch (err) {
    throw new Error(err);
  }
};

exports.update = async ({
  id,
  milestone_name,
  milestone_description,
  end_date,
  status,
}) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql =
      'UPDATE milestones SET milestone_name=?, milestone_description=?, end_date=?, status=? WHERE id= ?';
    const [{ insertId }] = await connection.query(sql, [
      milestone_name,
      milestone_description,
      end_date,
      status,
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
    let sql = 'DELETE FROM milestones WHERE id = ?';
    const [{ insertId }] = await connection.query(sql, [id]);
    connection.release();
    return insertId;
  } catch (err) {
    throw new Error(err);
  }
};

exports.getStatusCount = async status => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql = 'SELECT count(*) as count FROM milestones WHERE status = ?';
    const [[result]] = await connection.query(sql, [status]);
    connection.release();
    return result.count;
  } catch (err) {
    throw new Error(err);
  }
};
