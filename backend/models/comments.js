const db = require('../db');

exports.create = async ({ issueId, writerId, description }) => {
  try {
      // 2개 쿼리중 하나 실패하면 둘다 안들어가게 처리 해야함
    const connection = await db.pool.getConnection(async conn => conn);
    let sql1 = 'INSERT INTO comments (writer_id, description) VALUES (?, ?)';
    const [{ commentId }] = await connection.query(sql1, [writerId, description]);

    let sql2 = 'INSERT INTO issue_comments (issue_id, comment_id) VALUES (?, ?)';
    const [{ issueCommentId  }] = await connection.query(sql2, [issueId, commentId]);
    
    connection.release();
    
    return { commentId, issueCommentId };

  } catch (err) {
    throw new Error(err);
  }
};
