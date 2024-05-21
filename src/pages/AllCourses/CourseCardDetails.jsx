import React from "react"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import * as coursesAPI from '../../utilities/courses-api';

export default function CourseCardDetails() {
    const { courseId } = useParams()
    const [courseDetails, setCourseDetails] = useState(null)

    useEffect(function () {
        async function getCourseDetails() {
            const course = await coursesAPI.getDetails(courseId);
            setCourseDetails(course)
        }
        getCourseDetails();
    }, [courseId])
    if (!courseDetails) return <p>Loading...</p>;

    return (
        <>
            <div className="panelContainer">
                <h1>Course Details</h1>
                <h2>{courseDetails.name}</h2>
                <p><strong>Description</strong></p>
                <p className="description">{courseDetails.description}</p>
                <p><strong>Content</strong></p>
                <p>{courseDetails.content}</p>
                <p><strong>Duration</strong></p>
                <p>{courseDetails.duration} weeks</p>
                <p><strong>Skill level</strong></p>
                <p> Skill level for this course is {courseDetails.skillLevel}, on the scale 1-10 </p>
            </div>
        </>

    )
}