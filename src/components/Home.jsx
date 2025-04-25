import React, { useState, useEffect } from "react";
import "../components/Home.css";
import HomeImage from "../images/homeImage.png";
import { Button, TextField, InputAdornment } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import CarouselComponent from  "./CarouselComponent";
import { useNavigate } from "react-router-dom";
import useScrollAnimation from "./useScrollAnimation";


export default function Home() {
  // State to manage dynamic subtext
  const [subText, setSubText] = useState(
    "A roadmap tailored for students, guiding them through learning, skills, and career choices with top resources and expert insights."
  );


  const navigate = useNavigate(); // Initialize navigation

  // State to check if it's mobile mode
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Function to update text and mobile status on resize
  useEffect(() => {
    const updateView = () => {
      const mobileView = window.innerWidth <= 768;
      setIsMobile(mobileView);

      if (mobileView) {
        setSubText("Fuel Your Ambition with the Best Learning Path!");
      } else {
        setSubText(
          "A roadmap tailored for students, guiding them through learning, skills, and career choices with top resources and expert insights."
        );
      }
    };

    updateView(); // Run on mount
    window.addEventListener("resize", updateView);

    return () => window.removeEventListener("resize", updateView);
  }, []);


  const [carouselRef, carouselVisible] = useScrollAnimation();
const [footerRef, footerVisible] = useScrollAnimation();


  return (
    <>
      <div className="home-container">
        <div className="text-section">
          {/* Show search bar only in mobile mode */}
          {isMobile && (
            <TextField
              className="mobile-search-bar"
              placeholder="Search for Roadmaps..."
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  </InputAdornment>
                ),
              }}
            />
          )}

          <h1>
            Your Next Path to Success <br /> <span>Starts Here!</span>
          </h1>
          <p>{subText}</p>
          <Button
  variant="contained"
  className="explore-btn"
  onClick={() => navigate("/roadmaps")}
>
  Explore Your Path
</Button>
        </div>
        <div className="image-section">
          <img src={HomeImage} alt="Learning illustration" />
        </div>
      </div>

      <div
  id="certification-section"
  ref={carouselRef}
  className={`animate-on-scroll ${carouselVisible ? "visible" : ""}`}
>
  <CarouselComponent />
</div>

<div
  id="footer-section"
  ref={footerRef}
  className={`animate-on-scroll ${footerVisible ? "visible" : ""}`}
>
  <Footer />
</div>

    </>
  );
}
