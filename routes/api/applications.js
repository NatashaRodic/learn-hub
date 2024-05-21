const express = require('express');
const router = express.Router();
const applicationsCtrl = require('../../controllers/api/applications');

//POST /api/applications/
router.post('/', applicationsCtrl.create);
// PUT /api/applications/:id/approve
router.put('/:id/approve', applicationsCtrl.approve);

// PUT /api/applications/:id/deny
router.put('/:id/deny', applicationsCtrl.deny);

// GET /api/applications/pending
router.get('/pending', applicationsCtrl.getPendingApplications);


module.exports = router;