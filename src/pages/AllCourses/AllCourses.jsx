import { useEffect, useState } from 'react';
import { checkToken } from '../../utilities/users-service';
import * as coursesAPI from '../../utilities/courses-api';
import CourseCard from './CourseCard';

export default function AllCourses() {
  const [courses, setCourses] = useState(["empty"])
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }

  useEffect(function () {
    async function getCourses() {
      const coursesAll = await coursesAPI.getAll()
      console.log("courses All:", coursesAll)
      setCourses(coursesAll)
    }
    getCourses();
    console.log("courses state:", courses);
  }, [])

  return (
    <>
      <h1>All Available Courses </h1>
      <div className="coursePanel">
        {
          courses.map((el) => <CourseCard key={el._id} courseInfo={el} />)
        }
      </div>
    </>
  );
}