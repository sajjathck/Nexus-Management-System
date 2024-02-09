import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/HomeLayout";
import Home from "./components/views/landingPage/Home";
import About from "./components/views/landingPage/About";
import Contact from "./components/views/landingPage/Contact";
import Courses from "./components/views/landingPage/Courses";
import Login from "./components/views/landingPage/Login";
import ForgotPasswordPage from "./VIews/forgotpwd";
import NoPage from "./components/views/NoPage";
import Dashboard from "./components/views/dashboard/Dashboard";
import DashboardLayout from "./components/layouts/DashboardLayout";
import ProfilePage from "./components/views/dashboard/studentComponents/ProfilePage";
import AttendancePage from "./components/views/dashboard/studentComponents/AttendancePage";
import ExaminationPage from "./components/views/dashboard/studentComponents/ExaminationPage";
import ClassPage from "./components/views/dashboard/studentComponents/ClassPage";
import CommunicationPage from "./components/views/dashboard/studentComponents/CommunicationPage";
import StudentPage from "./components/views/dashboard/StudentPage";
import TeacherPage from "./components/views/dashboard/TeacherPage";
import Signup from "./components/views/Signup";
import AdminPage from "./components/views/dashboard/AdminPage";
import TeacherAttendancePage from "./components/views/dashboard/adminComponents/TeacherAttendancePage";
import StudentModule from "./components/views/dashboard/adminComponents/StudentModule";
import TeacherModule from "./components/views/dashboard/adminComponents/TeacherModule";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="courses" element={<Courses />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            {/* Add the new route for forgot password here */}
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="student" element={<StudentPage />}>
              <Route path="profile" element={<ProfilePage />} />
              <Route path="attendance" element={<AttendancePage />} />
              <Route path="examination" element={<ExaminationPage />} />
              <Route path="class" element={<ClassPage />} />
              <Route path="communication" element={<CommunicationPage />} />
            </Route>
            <Route path="teacher" element={<TeacherPage />}>
              <Route path="profile" element={<ProfilePage />} />
              <Route path="attendance" element={<AttendancePage />} />
              <Route path="examination" element={<ExaminationPage />} />
              <Route path="class" element={<ClassPage />} />
              <Route path="communication" element={<CommunicationPage />} />
            </Route>
            <Route path="admin" element={<AdminPage />}>
              <Route path="profile" element={<ProfilePage />} />
              <Route path="student" element={<StudentModule />} />
              <Route path="teacher" element={<TeacherModule />} />
              <Route path="attendance" element={<TeacherAttendancePage />} />
              <Route path="class" element={<ClassPage />} />
              <Route path="communication" element={<CommunicationPage />} />
            </Route>
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;