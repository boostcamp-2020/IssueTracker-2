const service = require('../services/issue-service');

exports.deleteIssue = async (req, res, next) => {
  try {
    const { status, message, insertId } = await service.deleteIssue(req);
    res.status(status).json({ message, insertId });
  } catch (err) {
    next(err);
  }
};
