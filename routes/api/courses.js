const express = require('express');
const router = express.Router();
const coursesCtrl = require('../../controllers/api/courses');
const course = require('../../models/course');


// GET /api/courses/:id
router.get('/:id', coursesCtrl.show);
// GET /api/courses
router.get('/', coursesCtrl.index);
// POST/api/courses/new
router.post('/', coursesCtrl.create);


module.exports = router;