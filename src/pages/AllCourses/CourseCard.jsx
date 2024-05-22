import React from 'react';
import * as coursesAPI from '../../utilities/courses-api';

function CourseCard({ courseInfo, onDelete, user }) {
    // Constructing the skill level bars based on the skill level of the course
    let levelBars = "";
    for (let index = 0; index < courseInfo.skillLevel; index++) {
        levelBars += " 🟩";
    }

    // Handling the deletion of a course
    const handleDelete = async (e) => {
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

            {/* Conditionally render buttons based on user role */}
            {user.role === 'teacher' ? (
                <>
                    <span><a className='button' href={`courses/${courseInfo._id}/details`}>Details</a></span>
                    <button style={{ backgroundColor: "#4c0030" }} onClick={handleDelete}>Delete Course</button>
                </>
            ) : (
                <span><a className='button' href={`courses/${courseInfo._id}/apply`}>Apply</a></span>
            )}
        </div>
    );
}

export default CourseCard;