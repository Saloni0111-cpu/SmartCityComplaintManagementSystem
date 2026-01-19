import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api.js";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
      });

      alert("Registration Successful!");
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4 bg-light" style={{ width: "350px" }}>
        <h3 className="text-center mb-4">Create an Account</h3>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control rounded-pill px-3 py-2 shadow-sm"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control rounded-pill px-3 py-2 shadow-sm"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control rounded-pill px-3 py-2 shadow-sm"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control rounded-pill px-3 py-2 shadow-sm"
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          className="btn btn-outline-primary w-100 mt-2"
          onClick={handleRegister}
        >
          Register
        </button>

        <p className="text-center mt-3 text-muted" style={{ fontSize: "14px" }}>
          Already have an account?{" "}
          <span
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;