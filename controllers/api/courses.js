const Course = require('../../models/course');
const User = require('../../models/user');

module.exports = {
    index,
    show,
    create
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
