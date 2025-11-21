import { useState } from "react";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleReset(e) {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:3000/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newPassword })
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Reset failed");
      } else {
        setMessage("Password reset successful!");
      }

    } catch (err) {
      setMessage("Server error");
    }
  }

  const container = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f7ff"
  };

  const card = {
    background: "white",
    width: "380px",
    padding: "30px 35px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center"
  };

  const input = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    marginBottom: "15px",
    width: "100%"
  };

  const button = {
    background: "#3578f6",
    color: "white",
    padding: "10px",
    borderRadius: "6px",
    width: "100%",
    border: "none"
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2>Reset Password</h2>

        <form onSubmit={handleReset} style={{ textAlign: "left" }}>
          <label>Email</label>
          <input
            type="email"
            style={input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>New Password</label>
          <input
            type="password"
            style={input}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <button style={button}>Reset Password</button>
        </form>

        {message && <p style={{ marginTop: "15px" }}>{message}</p>}

        <p style={{ marginTop: "10px" }}>
          Back to <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
