const service = require('../services/milestone-service');

exports.deleteMilestone = async (req, res, next) => {
  const { status, message, insertId } = await service.deleteMilestone(req);
  res.status(status).json({ message, insertId });
};
