const mongoose = require('mongoose');
const Application = require('../../models/application');
const User = require('../../models/user');
const Course = require('../../models/course');

module.exports = {
    create
};

async function create(req, res) {
    try {
        const user = await User.findById(req.user.id);
        const course = await Course.findById(req.body.courseId);

        if (!user || !course) {
            return res.status(404).json({ message: 'User or Course not found' });
        }

        const newApplication = new Application({
            status: 'pending',
            personalStatement: req.body.personalStatement,
            commitPerWeek: req.body.commitPerWeek,
            user: user._id,
            course: course._id
        });
        const savedApplication = await newApplication.save();
        res.status(201).json(savedApplication);
    } catch (err) {
        res.status(400).json(err);
    }
}