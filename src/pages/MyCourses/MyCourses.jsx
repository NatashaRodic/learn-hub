import React, { useEffect, useState } from 'react';
import * as coursesAPI from '../../utilities/courses-api';
import * as applicationsAPI from '../../utilities/applications-api';
import CourseCard from '../AllCourses/CourseCard';
import CourseCardDetails from '../AllCourses/CourseCardDetails';


export default function MyCourses() {
    const [myCourses, setMyCourses] = useState([]);

    useEffect(function () {
        async function getCourses() {
            const coursesApproved = await coursesAPI.getAll();
            setMyCourses(coursesApproved);
        }
        getCourses();
    }, [])

    console.log('courses', myCourses)

    return (
        <>
            <h1>My Courses</h1>
            <div className="coursePanel">
                {myCourses.map((course) => (
                    <li>{course.name}
                    </li>
                ))}
            </div>
        </>
    );

}

