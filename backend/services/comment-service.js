const comments = require('../models/comments');

exports.deleteCommentService = async req => {
    try {
      const { commentDeletedId } = await comments.delete(req.query);
  
      return { status: 200, message: 'comment delete 삭제', commentDeletedId };
    } catch {
      return { status: 400, message: '서비스 실패' };
    }
  };

exports.commentUpdateService = async req => {
    try {
      const updatedCommentId = await comments.update(req.body);
  
      return { status: 200, message: 'comment update 성공', updatedCommentId };
    } catch {
      return { status: 400, message: '서비스 실패' };
    }
  };

exports.addCommentService = async req => {
  try {
    const { generatedCommentId } = await comments.create(req.body);
    return { status: 200, message: 'comment 추가 성공', generatedCommentId };
  } catch {
    return { status: 400, message: '서비스 실패' };
  }
};

