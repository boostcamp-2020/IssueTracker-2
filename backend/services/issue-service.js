const issues = require('../models/issues');
const issueLabels = require('../models/issue_labels');
const issueAssignees = require('../models/issue_assignees');
const milestones = require('../models/milestones');
const labels = require('../models/labels');

exports.createIssue = async req => {
  try {
    const insertId = await issues.create(req.body);
    const issue_id = insertId;
    const label_name = req.body.label_name;
    const assignee_id = req.body.assignee_id;
    await issueLabels.create({ issue_id, label_name });
    await issueAssignees.create({ issue_id, assignee_id });
    return { status: 202, message: '이슈 등록 성공', insertId };
  } catch (err) {
    throw err;
  }
};

exports.getAllIssues = async req => {
  try {
    const status = { open: 0, close: 1 };
    const issuesInfo = {};

    const milestoneOpenCount = await milestones.getStatusCount(status.open);
    const milestoneCloseCount = await milestones.getStatusCount(status.close);

    const milestoneCount = milestoneOpenCount + milestoneCloseCount;
    const labelCount = await labels.read().length;

    issuesInfo.milestoneCount = milestoneCount;
    issuesInfo.labelCount = labelCount;

    issuesInfo.issuesArray = await issues.getAll();
    return { status: 202, message: 'issues', issuesInfo };
  } catch (err) {
    throw err;
  }
};

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
