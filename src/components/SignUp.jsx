import React, { useState, useEffect } from "react";
import "./SignUp.css";
import signupImage from "../images/signup.png"; // You can replace this image
import { useNavigate, Link } from "react-router-dom";

const SignUp = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
  
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email: email.trim(), 
          password: password.trim(),
          name: name?.trim() // Optional name field
        }),
        credentials: 'include'
      });
  
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }
  
      // Store user data and redirect
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/dashboard");
      
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);




  return (
    <div className="signup-container">

      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className={`signup-box ${animate ? "animate" : ""}`}>
        <div className="signup-form">
          <h2>Create Account</h2>
          <p>Sign up and start exploring!</p>

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
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {/* <div className="signup-options">
              <label>
                <input type="checkbox" /> Agree to terms and conditions
              </label>
            </div> */}
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
          <p className="login-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>

        <div className="signup-image">
          <img src={signupImage} alt="Signup Illustration" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
