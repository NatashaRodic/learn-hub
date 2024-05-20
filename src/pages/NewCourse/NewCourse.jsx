export default function NewCourse() {
  return (
    <>
      <h1>Create a new Course</h1>

      <form action="">
        <label>Course Name</label>
        <input type="text" />
        <label>About the Course</label>
        <textarea name="message" rows="5" cols="30">Course Details</textarea>
        <label>Course duration (in weeks) </label>
        <input type="number" />
        <label>Skills level</label>
        <select name="skills" id="skills-select">
          <option value="">--Please choose an option--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </form>
    </>

  );
}