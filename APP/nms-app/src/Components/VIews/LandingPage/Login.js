import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [unameError, setUnameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const onButtonClick = (e) => {
    // btn fn
    e.preventDefault();
    if (uname === "") {
      setUnameError("Please Enter a UserName");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }

    if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }
    navigate("/dashboard");
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
                      {/* Login Form here */}
                      <form>
                        <h3>Sign In</h3>
                        <div className="mb-3">
                          <label>User Name</label>
                          <input
                            type="text"
                            value={uname}
                            onChange={(ev) => setUname(ev.target.value)}
                            className="form-control"
                            placeholder="Username"
                          />
                          <label className="errorLabel">{unameError}</label>
                        </div>
                        <div className="mb-1">
                          <label className="password">Password</label>
                          <div className="input-group">
                            <input
                              type={showPassword ? "text" : "password"}
                              value={password}
                              onChange={(ev) => setPassword(ev.target.value)}
                              className="form-control"
                              placeholder="Enter password"
                            />

                            <button
                              type="button"
                              className="input-group-text"
                              onClick={() => setShowPassword((prev) => !prev)}
                              
                            >
                              {showPassword ? "Hide" : "Show"}
                            </button>
                          </div>
                          <label className="errorLabel">{passwordError}</label>
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
                            onClick={onButtonClick}
                            value={"Log in"}
                            className="btn btn-login"
                          >
                            Submit
                          </button>
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
