import React from "react";
import "./Header.css";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <nav className="header">
      <img src={logo} alt="logo" className="logo" />
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Explore</a></li>
        <li><a href="#">Roadmaps</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Communities</a></li>
        <li><a href="#">Profile</a></li>
      </ul>
      <div className="search-container">
        <input type="text" placeholder="Search..." name="search" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
    </nav>
  );
}
