import React, { useEffect, useState } from 'react';
import * as coursesAPI from '../../utilities/courses-api';
import CourseCard from '../AllCourses/CourseCard';

export default function MyCourses({ user }) {
    const [myCourses, setMyCourses] = useState([]);

    useEffect(function () {
        async function getCourses() {
            const coursesApproved = await coursesAPI.getAll();
            const userCourses = coursesApproved.filter(course => course.createdBy === user.id);
            setMyCourses(userCourses);
        }
        getCourses();
    }, [user.id]);


    console.log('courses', myCourses);

    return (
        <>
            <h1>My Courses</h1>

            <div className="coursePanel">
                {myCourses.map((el) => (
                    <CourseCard key={el._id} courseInfo={el} user={user} />
                ))}
            </div>
        </>
    );
}

