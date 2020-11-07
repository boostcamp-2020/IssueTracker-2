const service = require('../services/milestone-service');

exports.addMilestone = async (req, res, next) => {
  try {
    const { status, message, insertId } = await service.createMilestone(req);
    res.status(status).json({ message, insertId });
  } catch(err) {
    next(err);
  }
};

exports.getMilestones = async (req, res, next) => {
  try {
    const { status, message, milestoneArray } = await service.getMilestones();
    res.status(status).json({ message, milestoneArray });
  } catch(err) {
    next(err);
  }
};

exports.updateMilestone = async (req, res, next) => {
  try {
    const { status, message, insertId } = await service.updateMilestone(req);
    res.status(status).json({ message, insertId });
  } catch(err) {
    next(err);
  }
};

exports.deleteMilestone = async (req, res, next) => {
  try {
    const { status, message, insertId } = await service.deleteMilestone(req);
    res.status(status).json({ message, insertId });
  } catch(err) {
    next(err);
  }
};
