import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layouts/homeLayout";
import Home from "./Components/VIews/LandingPage/Home";
import About from "./Components/VIews/LandingPage/About";
import Contact from "./Components/VIews/LandingPage/Contact";
import Courses from "./Components/VIews/LandingPage/Courses";
import Login from "./Components/VIews/LandingPage/Login";
import Nopage from "./Components/VIews/Nopage";
import Dashboard from "./Components/VIews/Dashboard/Dashboard";
import DashboardLayout from "./Components/Layouts/DashboardLayout";
import ProfilePage from "./Components/VIews/Dashboard/StudentComponents/ProfilePage";
import AttendancePage from "./Components/VIews/Dashboard/StudentComponents/AttendancePage";
import ExaminationPage from "./Components/VIews/Dashboard/StudentComponents/ExaminationPage";
import ClassPage from "./Components/VIews/Dashboard/StudentComponents/ClassPage";
import CommunicationPage from "./Components/VIews/Dashboard/StudentComponents/CommunicationPage";
import StudentPage from "./Components/VIews/Dashboard/StudentPage";
import TeacherPage from "./Components/VIews/Dashboard/TeacherPage";

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
          </Route>
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
