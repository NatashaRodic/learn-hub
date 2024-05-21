import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewCourse from '../NewCourse/NewCourse';
import NavBar from '../../components/NavBar/NavBar';
import AllCourses from '../AllCourses/AllCourses';
import ApplicationPage from '../ApplicationPage/ApplicationPage';
import ManageApplications from '../ManageApplications/ManageApplications'; 

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/courses" element={<AllCourses />} />
            <Route path="/courses/:courseId/apply" element={<ApplicationPage />} />
            <Route path="/manage-applications" element={<ManageApplications />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}