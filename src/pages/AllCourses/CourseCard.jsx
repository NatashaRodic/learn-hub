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

    const handleDetailsClick = (courseId) => {
        // Your logic for handling the details click
        window.location.href = `courses/${courseId}/details`;
    };

    const handleApplyClick = (courseId) => {
        // Your logic for handling the apply click
        window.location.href = `courses/${courseId}/apply`;
    };

    return (
        <div className='courseCard'>
            <h2>{courseInfo.name}</h2>
            <div className="courseDescription"><p>{courseInfo.content}</p></div>
            <p className='details'>Duration: {courseInfo.duration} weeks</p>
            <p className='details'>Skill level required: {levelBars}</p>

            {/* Conditionally render buttons based on user role */}
            {user.role === 'teacher' ? (
                <>
                    <button className="button" onClick={() => handleDetailsClick(courseInfo._id)}>Details</button>
                    {courseInfo.createdBy === user.id && (
                        <button style={{ backgroundColor: "#4c0030" }} onClick={handleDelete}>
                            Delete Course
                        </button>
                    )}
                </>
            ) : (
                <button className="button" onClick={() => handleApplyClick(courseInfo._id)}>Apply</button>
            )}
        </div>
    );
}

export default CourseCard;