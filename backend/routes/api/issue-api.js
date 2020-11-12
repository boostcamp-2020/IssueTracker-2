const router = require('express').Router();
const controller = require('../../controllers/issue-controller');
const token = require('../../controllers/token-controller');

router.post('/', token.check, controller.createIssue);
router.get('/all', token.check, controller.getAllIssues);
router.put('/', token.check, controller.updateIssue);
router.delete('/', token.check, controller.deleteIssue);

module.exports = router;
