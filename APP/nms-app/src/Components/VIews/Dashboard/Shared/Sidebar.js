import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const modules = [
  { name: "Home", link: "/dashboard" },
  { name: "Profile", link: "/profile" },
  { name: "Attendance", link: "/attendance" },
  { name: "Examination", link: "/examination" },
  { name: "Class", link: "/class" },
  { name: "Communication", link: "/communication" },
];

export default function Sidebar() {
  return (


        <nav className="col-md-3 col-lg-2 d-md-block bg-light rounded-3 sidebar p-0 collapse">
          <div className="position-sticky pt-3">
          <ul class="sidebarlist nav flex-column">
              {modules.map((module) => (
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
