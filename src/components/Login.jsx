import React, { useState, useEffect } from "react";
import "./Login.css";
import loginImage from "../images/login.jpg";
import { useNavigate, Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
  
    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email: email.trim(), 
          password: password.trim() 
        }),
        credentials: 'include' // Important for session cookies
      });
  
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }
  
      // Store user data and redirect
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");
      
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };


  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);


  {
    isLoading && (
      <div className="loading-overlay">
        <div className="spinner"></div>
      </div>
    )
  }


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
            {/* <div className="login-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div> */}
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