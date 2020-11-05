const comments = require('../models/comments');

exports.deleteCommentService = async req => {
    try {
      const { commentDeletedId, issueCommentDeletedId } = await comments.delete(req.query);
  
      return { status: 200, message: 'comment delete 삭제', commentDeletedId, issueCommentDeletedId };
    } catch {
      return { status: 400, message: '서비스 실패' };
    }
  };