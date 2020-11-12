const router = require('express').Router();
const controller = require('../../controllers/milestone-controller');
const token = require('../../controllers/token-controller');

router.post('/', token.check, controller.addMilestone);
router.get('/all', token.check, controller.getMilestones);
router.put('/', token.check, controller.updateMilestone);
router.delete('/', token.check, controller.deleteMilestone);

module.exports = router;
