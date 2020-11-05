const router = require('express').Router();
const controller = require('../../controllers/milestone-controller');

router.delete('/', controller.deleteMilestone);

module.exports = router;
