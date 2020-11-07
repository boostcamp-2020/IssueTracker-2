const router = require('express').Router();
const controller = require('../../controllers/milestone-controller');

router.post('/', controller.addMilestone);
router.get('/all', controller.getMilestones);
router.patch('/', controller.updateMilestone);
router.delete('/', controller.deleteMilestone);

module.exports = router;
