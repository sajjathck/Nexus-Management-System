import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import  adminmodules from "../AdminComponents/adminModules";
import  studentmodules from "../StudentComponents/Studentmodules";
import  teachermodules from "../TeacherComponents/TeacherModules";

export default function Sidebar() {
  const [role, setRole] = useState(""); // Initialize role state
  useEffect(() => {
    const roleFromSessionStorage = sessionStorage.getItem("role");
    if (roleFromSessionStorage) {
      setRole(roleFromSessionStorage);
    }
  }, []);
  let displayedModules = [];
  switch (role) {
    case "admin":
      displayedModules = adminmodules;
      break;
    case "student":
      displayedModules = studentmodules;
      break;
    case "teacher":
      displayedModules = teachermodules;
      break;
    default:
      // Default modules or empty array if role is not recognized
      displayedModules = [];
  }

  return (
        <nav className="col-md-3 col-lg-2 d-md-block bg-light rounded-3 sidebar p-0 collapse">
          <div className="position-sticky pt-3">
          <ul className="sidebarlist nav flex-column">
          {displayedModules.map((module) => (
            <li className="nav-item border rounded-2 my-2 mx-2 " key={module.name}>
              <Link to={module.link} className="nav-side-text nav-link ">
                {module.name}
              </Link>
            </li>
          ))}
            </ul>
          </div>
        </nav>

  )
}
