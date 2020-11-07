const service = require('../services/comment-service');

exports.deleteComment = async (req, res, next) => {
  try {
    const { status, message, commentDeletedId } = await service.deleteCommentService(req);
    res.status(status).json({ message, commentDeletedId });
  } catch(err) {
    next(err);
  }
  };
  
exports.updateComment = async (req, res, next) => {
  try {
    const { status, message, updatedCommentId } = await service.commentUpdateService(req);
    res.status(status).json({ message, updatedCommentId });

  } catch(err) {
    next(err);
  }
  };
  
exports.addComment = async (req, res, next) => {
  try {
    const { status, message, generatedCommentId } = await service.addCommentService(req);
  res.status(status).json({ message, generatedCommentId });
  } catch(err) {
    next(err);
  }
};

exports.test = async (req, res, next) => {
  res.status(200).json({ message : "성공" });
};

