const router = require('express').Router();
const controller = require('../../controllers/milestone-controller');


router.post('/', controller.addMilestone);

router.get('/all', controller.getMilestones);


module.exports = router;
