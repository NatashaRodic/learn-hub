const Course = require('../../models/course');
const User = require('../../models/user');

module.exports = {
    index,
    show,
    create,
};

async function index(req, res) {
    const course = await Course.find({});
    if (!course) throw new Error();
    res.json(course);
}

async function show(req, res) {
    const course = await Course.findById(req.params.id);
    res.json(course);
}

async function create(req, res) {
    const { name, content, duration, skillLevel } = req.body;

    const course = new Course({
        name: name,
        content: content,
        duration: duration,
        skillLevel: skillLevel
    });

    const savedCourse = await course.save();
    res.json(savedCourse);
}
