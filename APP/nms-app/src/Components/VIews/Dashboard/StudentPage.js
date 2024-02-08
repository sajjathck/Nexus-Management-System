import React from 'react';
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Card from './Shared/Card';
import modules from './StudentComponents/Studentmodules';

export default function StudentPage() {
  return (
    <div className="col-md-9">
      <main className="main-section">
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center g-2">
            <div className="col">
              <div className="row row-cols-3 mb-5 mx-auto">
              {modules.map((module) => (
                  <Link key={module.name} to={`/${module.link}`}>
                    <Card
                      link={module.link}
                      name={module.name}
                    />
                  </Link>
                ))}
            </div>
          </div>
        </div>
    </div>
          </main >
        </div >
      

  );
}