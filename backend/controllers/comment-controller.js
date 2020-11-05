const service = require('../services/comment-service');

exports.addComment = async (req, res, next) => {
  const { status, message, generatedCommentId } = await service.addCommentService(req);
  res.status(status).json({ message, generatedCommentId });
};
