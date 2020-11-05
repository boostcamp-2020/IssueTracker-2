const milestones = require('../models/milestones');

exports.getMilestones = async req => {
  try {
    const milestoneArray = await milestones.getAll();

    return { status: 200, message: 'milestones', milestoneArray };
  } catch {
    return { status: 400, message: '서비스 실패' };
  }
};
