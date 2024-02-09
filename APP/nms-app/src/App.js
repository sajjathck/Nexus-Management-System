import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/VIews/LandingPage/Home";
import About from "./Components/VIews/LandingPage/About"
import Contact from "./Components/VIews/LandingPage/Contact"
import Courses from "./Components/VIews/LandingPage/Courses"
import Login from "./Components/VIews/LandingPage/Login"
import Signup from "./Components/VIews/Signup"
import Nopage from "./Components/VIews/Nopage"
import ForgotPasswordPage from "./Components/VIews/forgotpwd"
import DashboardLayout from "./Components/Layouts/DashboardLayout"
import Dashboard from "./Components/VIews/Dashboard/Dashboard"
import StudentPage from "./Components/VIews/Dashboard/StudentPage";
import ProfilePage from "./Components/VIews/Dashboard/StudentComponents/ProfilePage";
import StudentViewAttendancePage from "./Components/VIews/Dashboard/StudentComponents/AttendancePage";
import ViewExaminationPage from "./Components/VIews/Dashboard/StudentComponents/ExaminationPage";
import ViewClassPage from "./Components/VIews/Dashboard/StudentComponents/ViewClassPage";
import TeacherPage from "./Components/VIews/Dashboard/TeacherPage";
import TeacherProfilePage from "./Components/VIews/Dashboard/TeacherComponents/ProfilePage";
import AddStudentAttendancePage from "./Components/VIews/Dashboard/TeacherComponents/StudentAttendancePage";
import TeacherExaminationPage from "./Components/VIews/Dashboard/TeacherComponents/ExaminationPage";
import TClassviewPage from "./Components/VIews/Dashboard/TeacherComponents/TClassViewPage"
import AdminProfilePage from "./Components/VIews/Dashboard/AdminComponents/ProfilePage";
import AdminStudentManager from "./Components/VIews/Dashboard/AdminComponents/StudentManager";
import AdminPage from "./Components/VIews/Dashboard/AdminPage";
import AdminCommunicationPage from "./Components/VIews/Dashboard/AdminComponents/CommunicationPage";
import AdminClassPage from "./Components/VIews/Dashboard/AdminComponents/ClassPage";
import AdminTeacherManager from "./Components/VIews/Dashboard/AdminComponents/TeacherManager";
// import AdminTeacherAttendancePage from "./components/views/dashboard/adminComponents/TeacherAttendancePage";
import AdminTeacherAttendancePage from "./Components/VIews/Dashboard/AdminComponents/AdminTeacherAttendancePage";
// import HomeLayout from "./components/layouts/HomeLayout";
import HomeLayout from "./Components/Layouts/HomeLayout";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
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
              <Route path="attendance" element={<StudentViewAttendancePage />} />
              <Route path="examination" element={<ViewExaminationPage />} />
              <Route path="class" element={<ViewClassPage />} />
              {/* <Route path="communication" element={<CommunicationPage />} /> */}
            </Route>
            <Route path="teacher" element={<TeacherPage />}>
              <Route path="profile" element={<TeacherProfilePage />} />
              <Route path="attendance" element={<AddStudentAttendancePage />} />
              <Route path="examination" element={<TeacherExaminationPage />} />
              <Route path="class" element={<TClassviewPage />} />
              {/* <Route path="communication" element={<CommunicationPage />} /> */}
            </Route>
            <Route path="admin" element={<AdminPage />}>
              <Route path="profile" element={<AdminProfilePage />} />
              <Route path="student" element={<AdminStudentManager />} />
              <Route path="teacher" element={<AdminTeacherManager />} />
              <Route path="attendance" element={<AdminTeacherAttendancePage />} />
              <Route path="class" element={<AdminClassPage />} />
              <Route path="communication" element={<AdminCommunicationPage />} />
            </Route>
          </Route>
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;