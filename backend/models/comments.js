const db = require('../db');

exports.create = async ({ issueId, writerId, description }) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql = 'INSERT INTO comments (writer_id, description, issue_id) VALUES (?, ?, ?)';
    const [{ generatedCommentId }] = await connection.query(sql, [writerId, description, issueId]);
    connection.release();
    
    return { generatedCommentId };

  } catch (err) {
    throw new Error(err);
  }
};
