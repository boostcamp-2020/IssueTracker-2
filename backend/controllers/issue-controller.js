const service = require('../services/issue-service');

exports.createIssue = async (req, res, next) => {
  try {
    const { status, message, issue_id } = await service.createIssue(req);
    res.status(status).json({ message, issue_id });
  } catch (err) {
    next(err);
  }
};

exports.getAllIssues = async (req, res, next) => {
  try {
    const { status, message, issuesInfo } = await service.getAllIssues(req);
    res.status(status).json({ message, issuesInfo });
  } catch (err) {
    next(err);
  }
};

exports.updateIssue = async (req, res, next) => {
  try {
    const { status, message, insertId } = await service.updateIssue(req);
    res.status(status).json({ message, insertId });
  } catch (err) {
    next(err);
  }
};

exports.deleteIssue = async (req, res, next) => {
  try {
    const { status, message, insertId } = await service.deleteIssue(req);
    res.status(status).json({ message, insertId });
  } catch (err) {
    next(err);
  }
};
