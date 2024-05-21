const express = require('express');
const router = express.Router();
const applicationsCtrl = require('../../controllers/api/applications');


//POST /api/applications/
router.post('/', applicationsCtrl.create);

// GET /api/applications/pending
router.get('/pending', applicationsCtrl.getPendingApplications);

//GET /api/applications/:courseId
router.get('/:courseId', applicationsCtrl.show);

// PUT /api/applications/:id/approve
router.put('/:id/approve', applicationsCtrl.approve);

// PUT /api/applications/:id/deny
router.put('/:id/deny', applicationsCtrl.deny);

module.exports = router;