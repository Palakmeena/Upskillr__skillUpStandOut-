import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";


import logo from "../images/logo.jpg";
import "../components/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  const navigate = useNavigate(); // Hook for navigation

const handleNavigation = (path) => {
  navigate(path); // Navigate to the selected page
  setExploreOpen(false); // Close dropdown
  setMenuOpen(false); // Close menu on mobile
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
        {/* <li><ScrollLink to="roadmaps-section" smooth={true} duration={500} offset={-50}>Roadmaps</ScrollLink></li> */}
        <li><Link to="/roadmaps">Roadmaps</Link></li>

        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        
      </ul>

      <div className="search-container">
        
      <input type="text" placeholder="Search..." />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
    </nav>
  );
}