const comments = require('../models/comments');

exports.deleteCommentService = async req => {
  try {
    const { commentDeletedId } = await comments.delete(req.query);
    return { status: 202, message: 'comment delete 삭제', commentDeletedId };
  } catch (err) {
    throw err;
  }
};

exports.commentUpdateService = async req => {
  try {
    const updatedCommentId = await comments.update(req.body);
    return { status: 202, message: 'comment update 성공', updatedCommentId };
  } catch (err) {
    throw err;
  }
};

exports.addCommentService = async req => {
  try {
    const { generatedCommentId } = await comments.create(req.body);
    return { status: 200, message: 'comment 추가 성공', generatedCommentId };
  } catch (err) {
    throw err;
  }
};
