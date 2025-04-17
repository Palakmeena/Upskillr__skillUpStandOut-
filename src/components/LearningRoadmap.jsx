import React, { useState } from "react";
import "../components/LearningRoadmap.css"; // Import the CSS file

const steps = [
  { id: 1, label: "Step-1", title: "Learn a Programming Language", link: "#" },
  { id: 2, label: "Step-2", title: "Understand Data Structures", link: "#" },
  { id: 3, label: "Step-3", title: "Learn Algorithms", link: "#" },
  { id: 4, label: "Step-4", title: "Master OOP Concepts", link: "#" },
  { id: 5, label: "Step-5", title: "Build Projects", link: "#" },
];

const LearningRoadmap = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutId); // cancel hide if re-hovered
    setHoveredStep(index);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredStep(null);
    }, 300); // delay hiding by 300ms
    setTimeoutId(timeout);
  };

  return (
    <div className="roadmap-container">
      <div className="steps-wrapper">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="step-block"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="step-label">{step.label}</div>

            {index !== steps.length - 1 && <div className="arrow-right"></div>}
            

            {hoveredStep === index && (
              <div
                className="popup"
                onMouseEnter={() => clearTimeout(timeoutId)} // keep it open when hovering popup
                onMouseLeave={handleMouseLeave} // delay close when leaving popup
              >
                <p>{step.title}</p>
                <a
                  href={step.link}
                  className="popup-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningRoadmap;
