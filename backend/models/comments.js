const db = require('../db');

exports.delete = async ({ commentId }) => {
    try {
      const connection = await db.pool.getConnection(async conn => conn);
      let sql1 = 'DELETE FROM comments WHERE id = ?';
      const [{ commentDeletedId }] = await connection.query(sql1, [commentId]);

      let sql2 = 'DELETE FROM issue_comments WHERE comment_id = ?';
      const [{ issueCommentDeletedId }] = await connection.query(sql2, [commentId]);
      connection.release();
      return { commentDeletedId, issueCommentDeletedId };

    } catch (err) {
      throw new Error(err);
    }
  };
  