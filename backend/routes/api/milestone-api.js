const router = require('express').Router();
const controller = require('../../controllers/milestone-controller');
const token = require('../../controllers/token-controller');

router.post('/', controller.addMilestone);
router.get('/all', controller.getMilestones);
router.put('/', controller.updateMilestone);
router.delete('/', controller.deleteMilestone);

module.exports = router;
