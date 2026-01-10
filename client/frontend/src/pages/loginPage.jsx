import React from "react";

function LoginPage() {
  return (
    <div className="container-fluid bg-light vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ width: "350px" }}>
        
        <h3 className="text-center mb-4">Sign in to your Account</h3>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
          />
        </div>

        <button className="btn btn-outline-primary w-100 mt-2">
          Login
        </button>

        <p className="text-center mt-3 text-muted" style={{ fontSize: "14px" }}>
          Don’t have an account? <span className="text-primary">Register</span>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;
