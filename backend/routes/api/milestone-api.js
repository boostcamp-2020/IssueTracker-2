const router = require('express').Router();
const controller = require('../../controllers/milestone-controller');

router.patch('/', controller.updateMilestone);

module.exports = router;
