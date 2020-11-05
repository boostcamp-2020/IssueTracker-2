const service = require('../services/milestone-service');

exports.getMilestones = async (req, res, next) => {
  const { status, message, milestoneArray } = await service.getMilestones();

  res.status(status).json({ message, milestoneArray });
};
