const db = require('../db');

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
  