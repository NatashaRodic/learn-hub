import React from 'react';
import * as coursesAPI from '../../utilities/courses-api';

function CourseCard({ courseInfo, onDelete }) {
    // const pipes = Array.from({ length: parm }, (_, index) => '|'.repeat(parm - index)).join(' ');
    
    let levelBars = ""
    for (let index = 0; index < courseInfo.skillLevel; index++) {
        levelBars = levelBars + " 🟩";
    }

    const handleDelete = async(e) => {
        e.preventDefault();
        await coursesAPI.deleteCourse(courseInfo._id);
        await onDelete();
    }

    return (
        <div className='courseCard'>
            <h2>{courseInfo.name}</h2>
            <div className="courseDescription"><p>{courseInfo.content}</p></div>
            <p className='details'>Duration: {courseInfo.duration} weeks</p>
            <p className='details'>Skill level required: {levelBars}</p>
            <span><a href={`courses/${courseInfo._id}/apply`}>Apply</a></span>
            &nbsp; | &nbsp;
            <span><a href={`courses/${courseInfo._id}/details`}>Details</a></span>
            &nbsp; | &nbsp;
            <button onClick={handleDelete}>Delete Course</button>
        </div>
    )
}

export default CourseCard