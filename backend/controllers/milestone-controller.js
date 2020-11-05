const service = require('../services/milestone-service');

exports.addMilestone = async (req, res, next) => {
  const { status, message, insertId } = await service.createMilestone(req);
  res.status(status).json({ message, insertId });

exports.getMilestones = async (req, res, next) => {
  const { status, message, milestoneArray } = await service.getMilestones();

  res.status(status).json({ message, milestoneArray });

};
