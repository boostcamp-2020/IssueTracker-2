const users = require('../models/comments');

exports.addCommentService = async req => {
  try {
    const { generatedCommentId, generatedIssueCommentId } = await users.create(req.body);
    return { status: 200, message: 'comment 추가 성공', generatedCommentId, generatedIssueCommentId };
  } catch {
    return { status: 400, message: '서비스 실패' };
  }
};
