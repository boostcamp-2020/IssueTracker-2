const router = require('express').Router();
const controller = require('../../controllers/milestone-controller');

router.post('/', controller.addMilestone);

module.exports = router;
