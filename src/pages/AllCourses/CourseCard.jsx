import React from 'react'

function CourseCard({ courseInfo }) {
    return (
        <div className='courseCard'>
            <h2>{courseInfo.name}</h2>
            <div className="courseDescription"><p>{courseInfo.content}</p></div>
            <p>Duration: {courseInfo.duration} weeks</p>
            <p>Skill level required: {courseInfo.skillLevel}</p>
            <p> <a href="http://"></a></p>

        </div>
    )
}

export default CourseCard