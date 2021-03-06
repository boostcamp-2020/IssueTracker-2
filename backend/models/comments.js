const db = require('../db');
const util = require('../util');

exports.delete = async ({ commentId }) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql = 'DELETE FROM comments WHERE id = ?';
    const [{ commentDeletedId }] = await connection.query(sql, [commentId]);
    connection.release();
    return { commentDeletedId };
  } catch (err) {
    throw new Error(err);
  }
};

exports.update = async ({ commentId, commentDescription }) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql = 'Update comments SET description = ? WHERE id = ?';
    const [{ updatedCommentId }] = await connection.query(sql, [
      commentDescription,
      commentId,
    ]);
    connection.release();
    return updatedCommentId;
  } catch (err) {
    throw new Error(err);
  }
};

exports.create = async ({ issueId, writerId, description }) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql =
      'INSERT INTO comments (writer_id, description, issue_id, created_at) VALUES (?, ?, ?, ?)';
    const [{ generatedCommentId }] = await connection.query(sql, [
      writerId,
      description,
      issueId,
      util.now(),
    ]);
    connection.release();

    return { generatedCommentId };
  } catch (err) {
    throw new Error(err);
  }
};
