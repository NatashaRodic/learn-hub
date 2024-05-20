const Course = require('../../models/course');

module.exports = {
    index,
};

async function index(req, res) {
    const course = await Course.find({});
    if (!course) throw new Error();
    res.json(course);
}


