const service = require('../services/comment-service');

exports.addComment = async (req, res, next) => {
  const { status, message, commentId, issueCommentId } = await service.addCommentService(req);
  res.status(status).json({ message, commentId, issueCommentId });
};
