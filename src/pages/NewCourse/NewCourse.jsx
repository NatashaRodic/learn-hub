import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as createCourseAPI from '../../utilities/courses-api';
import { getUser } from '../../utilities/users-service';

export default function NewCourse() {
  const navigate = useNavigate();
  const [newCourse, setNewCourse] = useState({
    name: 'Node.js',
    content: 'Test',
    duration: '5',
    skillLevel: '1'
  });

  function handleChange(e) {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const newCourseRes = await createCourseAPI.createNew(newCourse);
      navigate('/courses');
    } catch (err) {
      console.log('Error while creating the course', err);
    }
  }

  return (
    <>
      <h1>New Course</h1>

      <form className="containerBox" onSubmit={handleSubmit}>
        <label>Course Name</label>
        <input type="text" name="name" value={newCourse.name} onChange={handleChange} required />
        <label>About the Course</label>
        <textarea type="content" name="content" rows="5" cols="30" value={newCourse.content} onChange={handleChange}>Course Details</textarea>
        <label>Course duration (in weeks) </label>
        <input type="duration" name="duration" value={newCourse.duration} onChange={handleChange} />
        <label>Skills level</label>
        <input type="skillLevel" name="skillLevel" value={newCourse.skillLevel} onChange={handleChange} />
        <button>Create the course</button>
      </form>
    </>

  );
}