const milestones = require('../models/milestones');

exports.createMilestone = async req => {
  try {
    const insertId = await milestones.create(req.body);
    return { status: 202, message: '마일스톤 등록 성공', insertId };
  } catch(err) {
    throw(err);
  }
};
exports.getMilestones = async req => {
  try {
    const status = { open : 0, close : 1};
    const milestonesInfo = {};

    milestonesInfo.openTotalCount = await milestones.getStatusCount(status.open);
    milestonesInfo.closeTotalCount = await milestones.getStatusCount(status.close); 
    milestonesInfo.milestoneArray = await milestones.getAll(req.query);
    
    return { status: 202, message: 'milestones', milestonesInfo };

  } catch(err) {
    throw(err);
  }
};
exports.updateMilestone = async req => {
  try {
    const insertId = await milestones.update(req.body);
    return { status: 202, message: '마일스톤 업데이트 성공', insertId };
  } catch(err) {
    throw(err);
  }
};
exports.deleteMilestone = async req => {
  try {
    const deletedId = await milestones.delete(req.query);
    return { status: 202, message: '마일스톤 삭제 성공', deletedId };
  } catch(err) {
    throw(err);
  }
};

