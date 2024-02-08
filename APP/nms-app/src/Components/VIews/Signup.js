import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validateInput = (value, label) => {
  if (value === "") {
    return `Please enter a ${label}.`;
  }
  if (label === "Password" && value.length < 8) {
    return "Password must be at least  8 characters long.";
  }
  if (label === "PhoneNum" && !/^\d{10}$/.test(value)) {
    return "Phone number must be exactly  10 digits.";
  }

  // Add validation for email
  if (label === "Emailid" && !/\S+@\S+\.\S+/.test(value)) {
    return "Please enter a valid email address.";
  }

  // if (label === "AdmissionId" && value.trim() === "") {
  //   return "Please enter an Admission ID.";
  // }
  return null;
};

export default function Signup(props) {
  React.useEffect(() => {
   
  }, []);
  const [userDetails, setUserDetails] = useState({
    UserId: "",
    UserName: "",
    Password: "",
    Role: "",
    PhoneNum: "",
    EmailId: "",
    AdmissionID: "",

  });
  //errors
  const [userIdError, setUserIdError] = useState("");
  const [unameError, setUnameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [roleError, setRoleError] = useState("");
  const [phoneNumError, setPhoneNumberError] = useState("");
  const [emailIdError, setEmailError] = useState("");
  const [admissionIdError, setAdmissionIdError] = useState("");
  const [err, setErr] = useState("");
  //util
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {

    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
    if (e.target.id === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    setEmailError(validateInput(userDetails.Emailid, "Email"));
    setPhoneNumberError(validateInput(userDetails.PhoneNum, "Phone Number"));
    setAdmissionIdError(validateInput(userDetails.AdmissionID, "Admission ID"));
    setRoleError(validateInput(userDetails.Role, "Role"));
    setUnameError(validateInput(userDetails.UserName, "Username"));
    setPasswordError(validateInput(userDetails.Password, "Password"));
    setUserIdError(validateInput(userDetails.UserId, "UserId"));

    if (userDetails.Password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
    
    if (
      !unameError &&
      !passwordError &&
      !roleError &&
      !phoneNumError &&
      !emailIdError &&
      !userIdError &&
      !admissionIdError
    ) {
      setIsLoading(true);
      axios
        .post("http://localhost:5225/api/User/Register", userDetails)
        .then((response) => {
          console.log(response);
          toast('User registered successfully!');
         
          setTimeout(() => {
            navigate("/login"); // Redirect to login page after successful registration
          },  3000); 
        })
        .catch((error) => {
          // Handle error during registration
          setErr("An error occurred during registration.");
          setIsLoading(false);
        });
    }
  };

  return (
    <section
      id="signup-section"
      className="bg-light rounded-2 p-3 p-md-4 p-xl-5 min-vh-80 d-flex flex-row align-items-center"
    >

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-8 card rounded shadow p-0 mb-3">
            <div className="row g-0">
     
              {/* <div className="col-md-5">
                <img
                  src="https://images.unsplash.com/photo-1525011268546-bf3f9b007f6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="card-img img-fluid"
                  alt="..."
                />
              </div> */}
              <div className="col-md-12 ">
                <div className="card-body">
                  <div className="card-body p-3 p-md-4 p-xl-5">
                    <form onSubmit={handleSignup}>
                      <div className="row ">
                        <h6 className="fs-3 mb-4 mt-0">
                        <ToastContainer />
                          Welcome!{" "}
                          <span className="text-primary">Sign up now.</span>
                        </h6>
                        <div className="col-md-6 ">
                          <div className="mb-3">
                            <label htmlFor="username">Username</label>
                            <input
                              type="text"
                              id="UserName"
                              value={userDetails.UserName}
                              onChange={handleChange}
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
                          <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <div className="input-group">
                              <input
                                type={showPassword ? "text" : "password"}
                                id="Password"
                                value={userDetails.Password}
                                onChange={handleChange}
                                className="form-control"
                                aria-describedby="passwordHelp"
                                aria-invalid={!!passwordError}
                              />
                              {/* Show/hide password button */}
                              <button
                                type="button"
                                className="input-group-text"
                                onClick={() => setShowPassword((prev) => !prev)}
                              >
                                {showPassword ? "Hide" : "Show"}
                              </button>
                            </div>
                            {passwordError && (
                              <small id="passwordHelp" className="text-danger">
                                {passwordError}
                              </small>
                            )}
                          </div>
                          <div className="mb-3">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                              type="password"
                              id="confirmPassword"
                              value={confirmPassword}
                              onChange={handleChange}
                              className="form-control"
                              aria-describedby="confirmPasswordHelp"
                              aria-invalid={!!confirmPasswordError}
                            />
                            {confirmPasswordError && (
                              <small id="confirmPasswordHelp" className="text-danger">
                                {confirmPasswordError}
                              </small>
                            )}
                          </div>
                          <div className="mb-3">
                            <label htmlFor="role">Role</label>
                            <select
                              id="Role"
                              value={userDetails.Role}
                              onChange={handleChange}
                              className="form-control bg-light"
                              aria-describedby="roleHelp"
                              aria-invalid={!!roleError}
                            >
                              <option value="">Select Role</option>
                              <option value="teacher">Teacher</option>
                              <option value="student">Student</option>
                            </select>
                            {roleError && (
                              <small id="roleHelp" className="text-danger">
                                {roleError}
                              </small>
                            )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="tel">Mobile No</label>
                            <input
                              type="tel"
                              id="PhoneNum"
                              value={userDetails.PhoneNum}
                              onChange={handleChange}
                              className="form-control"
                              aria-describedby="phoneNumHelp"
                              aria-invalid={!!phoneNumError}
                            />
                            {phoneNumError && (
                              <small id="phoneNumHelp" className="text-danger">
                                {phoneNumError}
                              </small>
                            )}
                          </div>
                          <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                              type="email"
                              id="EmailId"
                              value={userDetails.Emailid}
                              onChange={handleChange}
                              className="form-control"
                              aria-describedby="emailIdHelp"
                              aria-invalid={!!emailIdError}
                            />
                            {emailIdError && (
                              <small id="emailIdHelp" className="text-danger">
                                {emailIdError}
                              </small>
                            )}
                          </div>
                          <div className="mb-3">
                            <div>
                              <label htmlFor="AdmissionID"> {userDetails.Role} ID</label>
                              <input
                                type="text"
                                id="AdmissionID"
                                value={userDetails.AdmissionID}
                                onChange={handleChange}
                                className="form-control"
                                aria-describedby="admissionIdHelp"
                                aria-invalid={!!admissionIdError}
                              />
                              {admissionIdError && (
                                <small
                                  id="admissionIdHelp"
                                  className="text-danger"
                                >
                                  {admissionIdError}
                                </small>
                              )}
                            </div>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="UserId">User ID</label>
                            <input
                              type="text"
                              id="UserId"
                              value={userDetails.UserId}
                              onChange={handleChange}
                              className="form-control"
                              aria-describedby="userIdHelp"
                              aria-invalid={!!userIdError}
                            />
                            {userIdError && (
                              <small id="userIdHelp" className="text-danger">
                                {userIdError}
                              </small>
                            )}
                          </div>
                        </div>
                        <div className="d-grid mt-2">
                          <button
                            type="submit"
                            className="btn btn-login"
                            disabled={isLoading}
                          >
                            {isLoading ? "Signing up..." : "Submit"}
                          </button>
                          {err && (
                            <small
                              id="ButtonHelp"
                              className="text-danger"
                            >
                              {err}
                            </small>
                          )}
                        </div>
                        <div className="mb-3 mt-2 d-flex justify-content-between">
                          <Link to="/login" className="text-decoration-none">
                            <small>Already have an account? Log In</small>
                          </Link>
                        </div>
                      </div>
                    </form>
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
