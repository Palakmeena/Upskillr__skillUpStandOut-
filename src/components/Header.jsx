import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext"; // Add this import

import logo from "../images/logo.jpg";
import "../components/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth(); // Get auth state and logout function

  const handleNavigation = (path) => {
    navigate(path);
    setExploreOpen(false);
    setMenuOpen(false);
  };

  const handleProfileClick = () => {
    if (isAuthenticated) {
      navigate("/dashboard"); // Or wherever you want to send logged-in users
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="header">
      <img src={logo} alt="logo" className="logo" />

      <button 
        className="burger-menu" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li className="dropdown" 
            onMouseEnter={() => setExploreOpen(true)} 
            onMouseLeave={() => setExploreOpen(false)}>
          <span>
            Explore <FontAwesomeIcon icon={exploreOpen ? faChevronDown : faChevronUp} className="dropdown-icon" />
          </span>
          {exploreOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/Community">Communities</Link></li>
              <li><Link to="/Internship">Internships</Link></li>
              <li><Link to="/CarouselComponent">Events</Link></li>
              <li><Link to="/Programs">Programs</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/roadmaps">Roadmaps</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        
        {/* Updated Profile/Dashboard link */}
        <li>
          {isAuthenticated ? (
            <Link to="/dashboard">Dashboard</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
        
        {/* Add logout button when authenticated */}
        {isAuthenticated && (
          <li>
            <button onClick={logout} className="logout-button">
              Logout
            </button>
          </li>
        )}
      </ul>

      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
    </nav>
  );
}