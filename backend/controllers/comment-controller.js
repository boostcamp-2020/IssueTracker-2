const service = require('../services/comment-service');

exports.updateComment = async (req, res, next) => {
    const { status, message, updatedCommentId } = await service.commentUpdateService(req);
    res.status(status).json({ message, updatedCommentId });
  };
  
exports.addComment = async (req, res, next) => {
  const { status, message, generatedCommentId } = await service.addCommentService(req);
  res.status(status).json({ message, generatedCommentId });
};
