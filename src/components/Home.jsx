import React from "react";
import "./Home.css";
import HomeImage from "../images/homeImage.png"; // Your image path
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="home-container">
      <div className="text-section">
        <h1>Your Next Path to Success <br /> <span>Starts Here!</span></h1>
        <p>
          A roadmap tailored for students, guiding them through learning, 
          skills, and career choices with top resources and expert insights.
        </p>
        <Button variant="contained" className="explore-btn">
          Explore Your Path
        </Button>
      </div>
      <div className="image-section">
        <img src={HomeImage} alt="Learning illustration" />
      </div>
    </div>
  );
}
