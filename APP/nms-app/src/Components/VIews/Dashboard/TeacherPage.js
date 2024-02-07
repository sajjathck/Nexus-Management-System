import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Card from "./Shared/Card";

const modules = [
  { name: "Profile", link: "profile" },
  { name: "Attendance", link: "attendance" },
  { name: "Examination", link: "examination" },
  { name: "Class", link: "class" },
  { name: "Communication", link: "communication" },
];

export default function TeacherPage() {
  return (
    <div className="container-fluid">
     

        <div className="col-md-9">
          <main className="main-section">
            <div className="container-fluid">
              <div className="row justify-content-between align-items-center g-2">
                <div className="col">
                  <div className="row row-cols-3 mb-5 mx-auto">
                    {modules.map((module) => (
                      <Card
                        key={module.name}
                        link={module.link}
                        name={module.name}
                      >
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

  );
}
