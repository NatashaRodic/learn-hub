const express = require('express');
const router = express.Router();
const applicationsCtrl = require('../../controllers/api/applications');

//GET
router.get('/:courseId', applicationsCtrl.show);

//POST /api/applications/
router.post('/', applicationsCtrl.create);

module.exports = router;