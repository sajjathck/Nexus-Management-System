import React, { useState, useEffect } from "react";
import Button from "../Button";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../VIews/Dashboard/Shared/Sidebar";

export default function DashboardLayout() {
  const [role, setRole] = useState(""); // Initialize role state
  useEffect(() => {
    const roleFromSessionStorage = sessionStorage.getItem("Role");
    if (roleFromSessionStorage) {
      setRole(roleFromSessionStorage);
    }
  }, []);

  return (
    <div className="container-fluid">
       <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            NeXus.
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav m-auto"></ul>
            <Link className="nav-item" to="/login">
              <Button text="Logout" />
            </Link>
          </div>
        </div>
      </nav>
      <div className="row mx-2 mb-0 mt-2 rounded-3 bg-light ">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="">
              {console.log(role)}
              {role === "Student" && "Student Dashboard"}
              {role === "Teacher" && "Teacher Dashboard"}
              {role === "Admin" && "Admin Dashboard"}            
            </h1>
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
