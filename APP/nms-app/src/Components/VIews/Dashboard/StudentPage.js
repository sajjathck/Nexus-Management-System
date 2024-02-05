import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";

const modules = [
  { name: 'Home', link: '/dashboard' },
  { name: 'Profile', link: '/profile' },
  { name: 'Attendance', link: '/attendance' },
  { name: 'Examination', link: '/examination' },
  { name: 'Class', link: '/class' },
  { name: 'Communication', link: '/communication' },
];

export default function StudentPage() {
  return (
    <div className="container-fluid">
      <div className="row">
          <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className='position-sticky pt-3'>
            <ul className="nav flex-column">
              {modules.map((module) => (
                <li className='nav-item' key={module.name}>
                  <Link to={module.link} className="nav-link">
                    {module.name}
                  </Link>
                </li>
              ))}
            </ul>
            </div>
          </nav>
        </div>
        <div className="col-md-9">
          <main className="main-section">
            <Outlet /> {/* Render nested routes here */}
          </main>
        </div>
      </div>

  );
}