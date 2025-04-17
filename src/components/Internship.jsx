import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../components/Internship.css";

const Internship = () => {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    fetch("https://67f7585542d6c71cca64c424.mockapi.io/internships") // your MockAPI endpoint
      .then((res) => res.json())
      .then((data) => setInternships(data))
      .catch((error) => console.error("Error fetching internships:", error));
  }, []);

  return (
    <div className="internship-section">
      <h2 className="internship-title">Recommended Internships</h2>
      <p className="internship-subtitle">
        Looking for the best of the best? Here are the top-rated internships by the learners' community.
      </p>

      <div className="internship-container">
        {internships.map((internship) => (
          <div key={internship.id} className="internship-card">
            <Carousel showThumbs={false} autoPlay infiniteLoop>
              <div>
                <img src={internship.image} alt={internship.title} />
              </div>
            </Carousel>
            <span className="internship-location">{internship.location}</span>
            <h3 className="internship-name">{internship.title}</h3>
            <p className="internship-company">{internship.company}</p>
            <div className="internship-meta">
              <span>👥 {internship.applicants} Applied</span>
              <span>⏳ {internship.daysLeft} days left</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;
