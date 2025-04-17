import React from "react";
import "./Resources.css";

const ResourceCard = ({ title, imageSrc, onClick }) => {
  return (
    <div className="card">
    
      <div className="card-header">{title}</div>
      <img src={imageSrc} alt={title} />
      <button onClick={onClick}>View →</button>
    </div>
  );
};

export default ResourceCard;
