const issues = require('../models/issues');
const issueLabels = require('../models/issue_labels');
const issueAssignees = require('../models/issue_assignees');
const milestones = require('../models/milestones');
const labels = require('../models/labels');
const db = require('../db');


exports.createIssue = async req => {
  try {
    let reqData = JSON.stringify(req.body);
    reqData = JSON.parse(reqData); 
    
    const issueData = { 
      user_sid : reqData.user_sid,
      issue_content : reqData.issue_content,
      issue_name : reqData.issue_name,
      milestone_id : reqData.milestone_id,
      issue_status : reqData.issue_status,
      assignee_id : reqData.assignee_id
    };

    const labelData = reqData.labelArray; 
    const assigneeData = reqData.assigneeArray; 

    const connection = await db.pool.getConnection(async conn => conn);
    connection.beginTransaction(); 

    const issue_id = await issues.create(connection, issueData);

    labelData.forEach(async label_id => {
      await issueLabels.create(connection, { issue_id, label_id });
    });

    assigneeData.forEach(async assignee_id => {
      await issueAssignees.create(connection, { issue_id, assignee_id });
    });

    connection.commit(); 
    connection.release();

    return { status: 202, message: '이슈 등록 성공', issue_id};
  } catch (err) {
    connection.rollback(); 
    connection.release();
    throw err;
  }
};

const getFilterType = reqData => {
  if (reqData.filter === 'open') {
    return { column: 'i.issue_status', condition: 0 };
  } else if (reqData.filter === 'your') {
    return { column: 'i.user_sid', condition: reqData.id };
  } else if (reqData.filter === 'assigned') {
    return { column: 'ia.issue_id', condition: reqData.id };
  } else if (reqData.filter === 'mentioning') {
    // 나중에 추가
  } else if (reqData.filter === 'close') {
    return { column: 'i.issue_status', condition: 1 };
  } else return { column: 0, condition: 0 };
};

exports.getAllIssues = async req => {
  try {
    const status = { open: 0, close: 1 };
    const issuesInfo = {};

    const milestoneOpenCount = await milestones.getStatusCount(status.open);
    const milestoneCloseCount = await milestones.getStatusCount(status.close);

    const milestoneCount = milestoneOpenCount + milestoneCloseCount;
    const labelCount = await labels.getAllCount();

    issuesInfo.milestoneCount = milestoneCount;
    issuesInfo.labelCount = labelCount.count;

    const filterType = getFilterType(req.query);

    issuesInfo.issuesArray = await issues.getAll(filterType);

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
