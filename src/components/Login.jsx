import React, { useState, useEffect } from "react";
import "./Login.css";
import loginImage from "../images/login.jpg";
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth(); // Get login function from AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
  
    try {
      const response = await login({
        email: email.trim(),
        password: password.trim()
      });
  
      // Handle pending resource after successful login
      const pendingResource = localStorage.getItem('pendingResource');
      if (pendingResource) {
        try {
          const resource = JSON.parse(pendingResource);
          await saveResource(resource);
          localStorage.removeItem('pendingResource');
          navigate("/resources");
          return;
        } catch (saveError) {
          console.error("Failed to save pending resource:", saveError);
        }
      }
  
      navigate("/dashboard");
    } catch (error) {
      setError(error.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <div className="login-container">
      <div className={`login-box ${animate ? "animate" : ""}`}>
        <div className="login-form">
          <h2>WELCOME BACK</h2>
          <p>Welcome back! Please enter your details.</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <p className="signup-text">
            Don't have an account? <Link to="/register">Sign up for free!</Link>
          </p>
        </div>

        <div className="login-image">
          <img src={loginImage} alt="Login Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Login;