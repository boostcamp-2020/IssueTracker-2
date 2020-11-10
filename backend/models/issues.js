const db = require('../db');
const util = require('../util');

exports.create = async ({
  user_sid,
  issue_content,
  issue_name,
  milestone_id,
  issue_status,
}) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql =
      'INSERT INTO issues (user_sid, issue_content, issue_name, created_at,milestone_id,issue_status) VALUES ( ?, ?, ?,?,?,?)';
    const [{ insertId }] = await connection.query(sql, [
      user_sid,
      issue_content,
      issue_name,
      util.now(),
      milestone_id,
      issue_status,
    ]);
    connection.release();
    return insertId;
  } catch (err) {
    throw new Error(err);
  }
};

exports.getAll = async () => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql = `
    select i.issue_name, i.created_at, i.issue_status, l.label_name, l.color, m.milestone_name, u.profile_image_url
from issues as i
left join issue_labels as il
on i.id = il.issue_id
left join labels as l
on l.id = il.label_id
left join milestones as m
on m.id = i.milestone_id
left join issue_assignees as ia
on i.user_sid = ia.issue_id
left join users as u
on u.sid = ia.assignee_id

    `;

    const [milestones] = await connection.query(sql, []);
    connection.release();
    return milestones;
  } catch (err) {
    throw new Error(err);
  }
};

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
