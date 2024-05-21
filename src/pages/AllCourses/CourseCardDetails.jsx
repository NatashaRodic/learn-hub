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
            <h1>Course Details</h1>
            <h1>{courseDetails.name}</h1>
            <p>{courseDetails.content}</p>
            <p>{courseDetails.duration} weeks</p>
            <p> Skill level for this course is {courseDetails.skillLevel}, on the scale 1-10 </p>
        </>

    )
}