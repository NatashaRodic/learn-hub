import { useEffect, useState } from 'react';
import * as coursesAPI from '../../utilities/courses-api';
import CourseCard from './CourseCard';

export default function AllCourses({ user }) {
  const [courses, setCourses] = useState([]);

  async function getCourses() {
    const coursesAll = await coursesAPI.getAll();
    setCourses(coursesAll);
  }

  useEffect(function () {
    getCourses();
  }, []);

  return (
    <>
      <h1>All Available Courses</h1>
      <div className="coursePanel">
        {courses.map((el) => (
          <CourseCard key={el._id} courseInfo={el} onDelete={getCourses} user={user} />
        ))}
      </div>
    </>
  );
}