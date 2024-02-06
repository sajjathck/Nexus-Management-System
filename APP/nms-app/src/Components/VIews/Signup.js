import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const validateInput = (value, label) => {
  if (value.trim() === "") {
    return `Please enter a ${label}.`;
  }
  if (label === "Password" && value.length < 8) {
    return "Password must be at least  8 characters long.";
  }
  return null;
};

export default function Signup(props) {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [unameError, setUnameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [roleError, setRoleError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setUnameError(validateInput(uname, "Username"));
    setPasswordError(validateInput(password, "Password"));
    setRoleError(validateInput(role, "Role"));

    if (!unameError && !passwordError && !roleError) {
      setIsLoading(true);

      try {
        // Replace with actual API call to register the user
        const response = await new Promise((resolve) =>
          setTimeout(() => resolve({ success: true }), 2000)
        );

        if (response.success) {
          // Redirect to dashboard or login page after successful signup
          navigate("/dashboard");
        } else {
          // Handle failed signup attempt
          setUnameError("Signup failed. Please try again.");
        }
      } catch (error) {
        console.error("Error during signup:", error);
        setPasswordError("An error occurred. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section
      id="signup-section"
      className="bg-light rounded-2 p-3 p-md-4 p-xl-5 min-vh-80 d-flex flex-row align-items-center"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="card rounded shadow p-0 mb-3">
            <div className="row g-0">
              <div className="col-md-8">
                {/* Replace with actual image or remove if not needed */}
                <img
                  src="https://images.unsplash.com/photo-1525011268546-bf3f9b007f6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="card-img img-fluid"
                  alt="..."
                />
              </div>
              <div className="col-md-4">
                <div className="card-body">
                  <div className="card-body p-3 p-md-4 p-xl-5">
                    <div className="row">
                      <form onSubmit={handleSignup}>
                        <h6 className="text-center mb-4 mt-0">
                          Welcome! Sign up now.
                        </h6>
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
                        <div className="mb-3">
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
                          <label htmlFor="role">Role</label>
                          <select
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="form-control"
                            aria-describedby="roleHelp"
                            aria-invalid={!!roleError}
                          >
                            <option value="">Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="teacher">Teacher</option>
                            <option value="student">Student</option>
                          </select>
                          {roleError && (
                            <small id="roleHelp" className="text-danger">
                              {roleError}
                            </small>
                          )}
                        </div>
                        <div className="d-grid">
                          <button
                            type="submit"
                            className="btn btn-login"
                            disabled={isLoading}
                          >
                            {isLoading ? "Signing up..." : "Submit"}
                          </button>
                        </div>
                        <div className="mb-3 d-flex justify-content-between">
                        <Link to="/login" className="text-decoration-none">
                          Already have an account? Log In
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
