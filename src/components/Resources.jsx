import React, { useState, useEffect } from "react";
import ResourceCard from "./ResourceCard";
import "./Resources.css";
import cardsData from "../data/resourcesData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faDownload, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from "../context/AuthContext";
import { saveResource, deleteSavedResource, getSavedResources } from "../services/api";

const Resources = ({ heading = "", description = "" }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedResources, setSelectedResources] = useState([]);
  const [modalTitle, setModalTitle] = useState("");
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [savedResources, setSavedResources] = useState([]);
  const [resourceToSave, setResourceToSave] = useState(null);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      const loadSavedResources = async () => {
        try {
          const response = await getSavedResources();
          setSavedResources(response.data);
        } catch (error) {
          console.error("Error loading saved resources:", error);
        }
      };
      loadSavedResources();
    }
  }, [isAuthenticated]);

  const isSaved = (resource) => {
    return savedResources.some(item => item.resource?.viewLink === resource.viewLink);
  };

  const handleSave = async (resource) => {
    if (!isAuthenticated) {
      setResourceToSave(resource);
      setShowLoginPrompt(true);
      return;
    }
  
    try {
      if (isSaved(resource)) {
        await deleteSavedResource(resource.viewLink);
        setSavedResources(savedResources.filter(item => item.resource.viewLink !== resource.viewLink));
      } else {
        await saveResource(resource);
        setSavedResources([...savedResources, { resource }]);
      }
    } catch (error) {
      console.error("Save error:", error);
      alert(error.message || "Failed to save resource");
    }
  };

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
                      <a href={resource.viewLink} target="_blank" rel="noreferrer" style={{ color: 'black' }}>
                        <FontAwesomeIcon icon={faEye} />
                      </a>
                      <a href={resource.downloadLink} download style={{ color: 'black' }}>
                        <FontAwesomeIcon icon={faDownload} />
                      </a>
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

{showLoginPrompt && (
  <div className="login-prompt-overlay">
    <div className="login-prompt-container">
      <button 
        className="login-prompt-close" 
        onClick={() => setShowLoginPrompt(false)}
      >
        <div className="cross">
        <FontAwesomeIcon icon={faTimes} />
        </div>

        
      </button>
      <h3 className="login-prompt-title">Save Resources</h3>
      <p className="login-prompt-message">
        Login to save this resource to your dashboard and access it anytime.
      </p>
      <div className="login-prompt-actions">
        <button 
          className="login-prompt-cancel"
          onClick={() => setShowLoginPrompt(false)}
        >
          Maybe Later
        </button>
        <button 
          className="login-prompt-confirm"
          onClick={() => {
            localStorage.setItem('pendingResource', JSON.stringify({
              ...resourceToSave,
              category: heading
            }));
            window.location.href = '/login?redirect=resources';
          }}
        >
          Login Now
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default Resources;