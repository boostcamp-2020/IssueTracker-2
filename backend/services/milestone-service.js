const milestones = require('../models/milestones');

exports.createMilestone = async req => {
  try {
    const insertId = await milestones.create(req.body);
    return { status: 200, message: '마일스톤 등록 성공', insertId };
  } catch {
    return { status: 400, message: '마일스톤 등록 실패' };
  }
};
exports.getMilestones = async req => {
  try {
    const milestoneArray = await milestones.getAll();

    return { status: 200, message: 'milestones', milestoneArray };
  } catch {
    return { status: 400, message: '서비스 실패' };
  }
};
exports.updateMilestone = async req => {
  try {
    const insertId = await milestones.update(req.body);
    return { status: 200, message: '마일스톤 업데이트 성공', insertId };
  } catch {
    return { status: 400, message: '마일스톤 업데이트 실패' };
  }
};
exports.deleteMilestone = async req => {
  try {
    const deletedId = await milestones.delete(req.query);
    return { status: 200, message: '마일스톤 삭제 성공', deletedId };
  } catch {
    return { status: 400, message: '마일스톤 삭제 실패' };
  }
};
