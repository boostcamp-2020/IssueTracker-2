const users = require('../models/comments');

exports.addCommentService = async req => {
  try {
    const { commentId, issueCommentId } = await users.create(req.body);
    return { status: 200, message: 'comment 추가 성공', commentId, issueCommentId };
  } catch {
    return { status: 400, message: '서비스 실패' };
  }
};
