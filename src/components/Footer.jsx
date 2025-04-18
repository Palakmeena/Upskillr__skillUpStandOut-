import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
// import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h1 className="footer-logo">
          {/* <span className="logo-icon">      <img src={logo} alt="logo" className="logo" />
          </span>  */}
        </h1>
        <p className="footer-text">
          Made with ❤️ By Palak Meena
        </p>
        <button className="footer-button">Coffee? Talk? Email?</button>
        <div className="footer-icons">
          <FaFacebookF className="icon" />
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
          <FaLinkedinIn className="icon" />
          <FaGithub className="icon" />
        </div>
      </div>
      <div class="footer-waves">
  <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#2563eb" fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,165.3C384,192,480,224,576,229.3C672,235,768,213,864,208C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L0,320Z"></path>
  </svg>
</div>
    </footer>
  );
};

export default Footer;
