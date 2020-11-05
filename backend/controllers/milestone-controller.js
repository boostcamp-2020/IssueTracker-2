const service = require('../services/milestone-service');

exports.updateMilestone = async (req, res, next) => {
  const { status, message, insertId } = await service.updateMilestone(req);
  res.status(status).json({ message, insertId });
};
