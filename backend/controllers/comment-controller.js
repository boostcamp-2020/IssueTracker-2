const service = require('../services/comment-service');

exports.deleteComment = async (req, res, next) => {
    const { status, message, commentDeletedId } = await service.deleteCommentService(req);
    res.status(status).json({ message, commentDeletedId });
  };
  