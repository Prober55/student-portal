import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthAPI } from "../services/api";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await AuthAPI.login(email, password);
      localStorage.setItem("token", res.token);
      navigate("/portal/home");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Student Portal Login</h2>

        <form onSubmit={handleLogin} className="login-form">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            Login
          </button>

          {error && <p className="error-text">{error}</p>}
        </form>

        <div className="login-links">
          <Link to="/forgot">Forgot Password?</Link>
          <p>
            No account? <Link to="/register">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
