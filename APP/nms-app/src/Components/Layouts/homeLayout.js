import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Button from "../Button";

export default function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            NeXus.
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link className="nav-link .nav-link-hm" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link .nav-link-hm" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link .nav-link-hm" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link .nav-link-hm" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            {!isLoginPage && ( // Conditionally render the login button
              <Link className="nav-item" to="/login">
                <Button text="Login" />
              </Link>
            )}
          </div>
        </div>
      </nav>
      <main className="mx-2 mb-0">
        <Outlet />
      </main>
    </div>
  );
}
