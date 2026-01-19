import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api.js";
function LoginPage() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(" ");
    const navigate = useNavigate();


    
    const handleLogin = async() => {
      try {
              const res = await API.post("/auth/login", {
                email,
                password
              });
            
              localStorage.setItem("token", res.data.token);
              navigate("/dashboard");
    }catch(err){
      setError(err.response?.data?.message || "login failed");
    }
  };



  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4 bg-light" style={{ width: "350px" }}>
        
        <h3 className="text-center mb-4">Sign in to your Account</h3>

        

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control rounded-pill px--3 py-2 shadow-sm "
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-outline-primary w-100 mt-2" onClick={handleLogin}>
          Login
        </button>

        <p className="text-center mt-3 text-muted" style={{ fontSize: "14px" }}>
          Don’t have an account? <span className="text-primary" style={{cursor: "pointer"}}
          onClick = {() => navigate("/register")}>Register</span>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;
