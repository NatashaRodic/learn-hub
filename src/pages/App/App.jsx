import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewCourse from '../NewCourse/NewCourse';
import AllCourses from '../AllCourses/AllCourses';
import ApplicationPage from '../ApplicationPage/ApplicationPage';
import ManageApplications from '../ManageApplications/ManageApplications';
import NavBar from '../../components/NavBar/NavBar';
import CourseCardDetails from '../AllCourses/CourseCardDetails';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/courses/:courseId/details" element={<CourseCardDetails />} />
            {user.role === 'teacher' && (
              <>
                <Route path="/courses" element={<AllCourses user={user} />} />
                <Route path="/courses/new" element={<NewCourse />} />
                <Route path="/manage-applications" element={<ManageApplications />} />
              </>
            )}
            {user.role === 'student' && (
              <>
                <Route path="/courses" element={<AllCourses user={user} />} />
                <Route path="/courses/:courseId/apply" element={<ApplicationPage />} />
                <Route path="/courses/:courseId/details" element={<CourseCardDetails />} />

              </>
            )}
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>


  );
}