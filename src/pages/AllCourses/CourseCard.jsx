import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ courseInfo }) {
    // const pipes = Array.from({ length: parm }, (_, index) => '|'.repeat(parm - index)).join(' ');
    let levelBars = ""
    for (let index = 0; index < courseInfo.skillLevel; index++) {
        levelBars = levelBars + " 🟩";

    }
    return (
        <div className='courseCard'>
            <h2>{courseInfo.name}</h2>
            <div className="courseDescription"><p>{courseInfo.content}</p></div>
            <p className='details'>Duration: {courseInfo.duration} weeks</p>
            <p className='details'>Skill level required: {levelBars}</p>
            <p><a href={`courses/${courseInfo._id}/apply`}>Apply</a></p>
        </div>
    )
}

export default CourseCard