const issues = require('../models/issues');

exports.updateIssue = async req => {
  try {
    const insertId = await issues.update(req.body);
    return { status: 202, message: '이슈 업데이트 성공', insertId };
  } catch (err) {
    throw err;
  }
};

exports.deleteIssue = async req => {
  try {
    const deletedId = await issues.delete(req.query);
    return { status: 202, message: '이슈 삭제 성공', deletedId };
  } catch (err) {
    throw err;
  }
};
