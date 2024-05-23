import React, { useEffect, useState } from 'react';
import * as coursesAPI from '../../utilities/courses-api';
import * as applicationsAPI from '../../utilities/applications-api';
import CourseCard from '../AllCourses/CourseCard';

export default function MyCourses({ user }) {
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    async function getCourses() {
      try {
        let userCourses = [];
        
        if (user.role === 'teacher') {
          const courses = await coursesAPI.getAll();

          userCourses = courses.filter(course => course.createdBy === user.id);
        } else if (user.role === 'student') {
          const applications = await applicationsAPI.getApplicationsByUser(user.id);
          userCourses = applications.map(application => application.course);
        }

        setMyCourses(userCourses);
      } catch (err) {
        console.error('Error fetching courses or applications:', JSON.stringify(err));
      }
    }

    getCourses();
  }, [user]);

  if (!myCourses) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>My Courses</h1>
      <div className="coursePanel">
        {myCourses.map(course => (
          <CourseCard key={course._id} courseInfo={course} user={user} />
        ))}
      </div>
    </>
  );
}