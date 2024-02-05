import React from "react";
import Button from "../Button";
import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="">
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
      <main className="mx-2 mb-0">
        <Outlet />
      </main>
    </div>
  );
}
