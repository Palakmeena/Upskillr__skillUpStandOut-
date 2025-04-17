import React, { useState ,useEffect} from "react";
import ResourceCard from "./ResourceCard";
import "./Resources.css";
import cardsData from "../data/resourcesData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';




const Resources = ({ heading = "", description = "" }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedResources, setSelectedResources] = useState([]);
  const [modalTitle, setModalTitle] = useState("");

  // State for saved resources
  const [savedResources, setSavedResources] = useState([]);

  // Check if a resource is saved
  const isSaved = (resource) => {
    return savedResources.some(item => item.viewLink === resource.viewLink);
  };

  // Handle save/unsave
  const handleSave = (resource) => {
    if (isSaved(resource)) {
      // Remove from saved
      setSavedResources(savedResources.filter(item => 
        item.viewLink !== resource.viewLink));
    } else {
      // Add to saved
      setSavedResources([...savedResources, resource]);
    }
  };

  // Load saved resources on component mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedResources')) || [];
    setSavedResources(saved);
  }, []);

  // Save to localStorage when savedResources changes
  useEffect(() => {
    localStorage.setItem('savedResources', JSON.stringify(savedResources));
  }, [savedResources]);



  const openModal = (title, resources) => {
    setModalTitle(title);
    setSelectedResources(resources);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="resources-container">
      <h2>{heading}</h2>
      {description && <p className="resources-subtext">{description}</p>}
      <div className="card-container">

        {(cardsData[heading] || []).map((card, index) => (
          <ResourceCard
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
            onClick={() => openModal(card.title, card.resources)}
          />
        ))}
      </div>



      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <h3 className="modal-title">{modalTitle}</h3>
            <div className="resources-list">
              {selectedResources.map((resource, index) => (
                <div key={index} className="resource-item">
                  <span>{resource.title}</span>
                  <div className="resource-actions">
  <div style={{ display: 'flex', gap: '20px', fontSize: '24px', alignItems: 'center', marginTop: '10px' }}>
    {/* View */}
    <a href={resource.viewLink} target="_blank" rel="noreferrer" style={{ color: 'black' }}>
      <FontAwesomeIcon icon={faEye} />
    </a>
    
    {/* Download */}
    <a href={resource.downloadLink} download style={{ color: 'black' }}>
      <FontAwesomeIcon icon={faDownload} />
    </a>
    
    {/* Save */}
    <button 
      onClick={() => handleSave(resource)}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        color: isSaved(resource) ? '#a777e3' : 'black'
      }}
    >
      <FontAwesomeIcon 
        icon={isSaved(resource) ? solidBookmark : regularBookmark} 
        fontSize="24px"
      />
    </button>
  </div>
</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resources;
