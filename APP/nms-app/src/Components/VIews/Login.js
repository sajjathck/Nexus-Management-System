import React, { Component } from 'react'

export default function Login() {
    return (
        <section id="login-section" class="bg-light rounded-2 p-3 p-md-4 p-xl-5 min-vh-80 d-flex flex-row align-items-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="card rounded shadow p-0 mb-3" >
                        <div class="row  g-0">
                            <div class="col-md-8">
                                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img img-fluid" alt="..." />
                            </div>
                            <div class="col-md-4">
                                <div class="card-body">
                                    <div class="card-body p-3 p-md-4 p-xl-5">
                                        <div class="row">
                                            {/* Login Form here */}
                                            <form>
                                                <h3>Sign In</h3>
                                                <div className="mb-3">
                                                    <label>User Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Username"
                                                    />
                                                </div>
                                                <div className="mb-1">
                                                    <label className="password text-left">Password</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Enter password"
                                                    />
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
                                                    <button type="submit" className="btn btn-login">
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
    )
}
