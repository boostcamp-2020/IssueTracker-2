const router = require('express').Router();
const controller = require('../../controllers/issue-controller');

router.post('/', controller.createIssue);
router.put('/', controller.updateIssue);
router.delete('/', controller.deleteIssue);

module.exports = router;
