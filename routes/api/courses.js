const express = require('express');
const router = express.Router();
const coursesCtrl = require('../../controllers/api/courses');

// GET /api/courses/:id
router.get('/:id', coursesCtrl.show);

// GET /api/courses
router.get('/', coursesCtrl.index);


module.exports = router;