const router = require('express').Router();
const controller = require('../../controllers/issue-controller');
const token = require('../../controllers/token-controller');

router.post('/', controller.createIssue);
router.get('/all', controller.getAllIssues);
router.put('/', controller.updateIssue);
router.delete('/', controller.deleteIssue);

module.exports = router;
