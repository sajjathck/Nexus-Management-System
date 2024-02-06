import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const validateInput = (value, label) => {
  if (value.trim() === "") {
    return `Please enter a ${label}.`;
  }
  if (label === "Password" && value.length < 8) {
    return "Password must be at least 8 characters long.";
  }
  return null;
};

export default function Login(props) {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [unameError, setUnameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // btn fn
    setUnameError(validateInput(uname, "Username"));
    setPasswordError(validateInput(password, "Password"));
    // let logins=[{ uname, password }]

    if (!unameError && !passwordError) {
      setIsLoading(true);

      try {
        // Simulate API call
        // const response = await new Promise((resolve) =>
        //   setTimeout(() => resolve({ success: true }), 2000)
        // );
        const response = await axios.post(
          "http://localhost:5225/api/User/Validate",
          { uname, password }
        );

        if (response.success) {
          // Store authentication token or handle login state
          navigate("/dashboard");
        } else {
          // Handle failed login attempt (e.g., invalid credentials)
          setUnameError("Invalid username or password.");
          setPasswordError(null); // Clear password error on invalid credentials
        }
      } catch (error) {
        console.error("Error during login:", error);
        // Handle API error gracefully
        setPasswordError("An error occurred. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section
      id="login-section"
      className="bg-light rounded-2 p-3 p-md-4 p-xl-5 min-vh-80 d-flex flex-row align-items-center"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="card rounded shadow p-0 mb-3">
            <div className="row  g-0">
              <div className="col-md-8">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="card-img img-fluid"
                  alt="..."
                />
              </div>
              <div className="col-md-4">
                <div className="card-body">
                  <div className="card-body p-3 p-md-4 p-xl-5">
                    <div className="row">
                      <form onSubmit={handleLogin}>
                        <h6 className="text-center mb-4 mt-0">
                          Hey,Welcome Back.!
                        </h6>
                        <h3>Sign In</h3>
                        <div className="mb-3">
                          <label htmlFor="username">Username</label>
                          <input
                            type="text"
                            id="username"
                            value={uname}
                            onChange={(e) => setUname(e.target.value)}
                            className="form-control"
                            aria-describedby="usernameHelp"
                            aria-invalid={!!unameError}
                          />
                          {unameError && (
                            <small id="usernameHelp" className="text-danger">
                              {unameError}
                            </small>
                          )}
                        </div>
                        <div className="mb-2">
                          <label htmlFor="password">Password</label>
                          <div className="input-group">
                            <input
                              type={showPassword ? "text" : "password"}
                              id="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="form-control"
                              aria-describedby="passwordHelp"
                              aria-invalid={!!passwordError}
                            />
                            {/* Some browsers Automatically have this option so i comment it\/ */}
                            {/* <button
                              type="button"
                              className="input-group-text"
                              onClick={() => setShowPassword((prev) => !prev)}
                              
                            >
                              {showPassword ? "Hide" : "Show"}
                            </button> */}
                          </div>
                          {passwordError && (
                            <small id="passwordHelp" className="text-danger">
                              {passwordError}
                            </small>
                          )}
                        </div>
                        <div className="mb-3 d-flex justify-content-between">
                          {/* <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div> */}
                          <p className="forgot-password text-right p-0 text-decoration-none">
                            Forgot <a href="#">Password?</a>
                          </p>
                        </div>
                        <div className="d-grid">
                          <button
                            type="submit"
                            className="btn btn-login"
                            disabled={isLoading}
                          >
                            {isLoading ? "Logging in..." : "Submit"}
                          </button>
                        </div>
                        <div className="mb-3 mt-1 d-flex justify-content-between">
                        <Link to="/signup" className="text-decoration-none">
                          <small>Don't have an account? Sign Up</small>
                        </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
