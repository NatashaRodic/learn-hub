const express = require('express');
const router = express.Router();
const applicationsCtrl = require('../../controllers/api/applications');

//POST /api/applications/
router.post('/', applicationsCtrl.create);

module.exports = router;