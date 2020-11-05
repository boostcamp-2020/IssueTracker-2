const milestones = require('../models/milestones');

exports.deleteMilestone = async req => {
  try {
    const deletedId = await milestones.delete(req.query);
    return { status: 200, message: '마일스톤 삭제 성공', deletedId };
  } catch {
    return { status: 400, message: '마일스톤 삭제 실패' };
  }
};
