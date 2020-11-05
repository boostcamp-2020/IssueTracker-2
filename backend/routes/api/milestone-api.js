const router = require('express').Router();
const controller = require('../../controllers/milestone-controller');


router.patch('/', controller.updateMilestone);
router.post('/', controller.addMilestone);
router.get('/all', controller.getMilestones);

module.exports = router;
