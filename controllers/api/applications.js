const mongoose = require('mongoose');
const Application = require('../../models/application');
const User = require('../../models/user');
const Course = require('../../models/course');

module.exports = {
    create,
    approve,
    deny,
    getPendingApplications,
    show
};

async function show(req, res) {
    const course = await Course.findById(req.params.courseId);
    const application = await Application.findOne({ user: req.user.id, course: course._id });

    if (!application) {
        return res.json(null);
    }
    
    res.json(application);
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
async function approve(req, res) {
    try {
        const application = await Application.findById(req.params.id);
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        application.status = 'approved';
        await application.save();
        res.status(200).json(application);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function deny(req, res) {
    try {
        const application = await Application.findById(req.params.id);
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        application.status = 'denied';
        await application.save();
        res.status(200).json(application);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function getPendingApplications(req, res) {
    try {
        const applications = await Application.find({ status: 'pending' }).populate('user').populate('course');
        res.status(200).json(applications);
    } catch (err) {
        res.status(400).json(err);
    }
}