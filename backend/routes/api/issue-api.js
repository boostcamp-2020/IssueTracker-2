const router = require('express').Router();
const controller = require('../../controllers/issue-controller');

router.delete('/', controller.deleteIssue);

module.exports = router;
