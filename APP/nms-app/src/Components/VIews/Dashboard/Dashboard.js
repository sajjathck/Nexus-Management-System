import React, { useState, useEffect } from "react";
import StudentPage from './StudentPage';
import TeacherPage from './TeacherPage';
import AdminPage from "./AdminPage";

export default function Dashboard() {
  const [role, setRole] = useState("student"); // Default role is student

  useEffect(() => {
    const roleFromSessionStorage = sessionStorage.getItem("Role");
    if (roleFromSessionStorage) {
      setRole(roleFromSessionStorage);
    }
  }, []);

  return (
    <section className="bg-light rounded-2 min-vh-80 d-flex flex-column justify-content-center align-items-center">
      {role === "Student" && <StudentPage />}
      {role === "Teacher" && <TeacherPage />}
      {role === "Admin" && <AdminPage />}
    </section>
  );
}
