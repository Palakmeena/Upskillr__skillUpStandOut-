import React, { useState, useEffect } from "react";
import ResourceCard from "./ResourceCard";
import "./Resources.css";
import cardsData from "../data/resourcesData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faDownload } from '@fortawesome/free-solid-svg-icons';
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

  // Load saved resources when authenticated
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
      // Store resource to save after login
      localStorage.setItem('pendingResource', JSON.stringify({
        title: resource.title,
        viewLink: resource.viewLink,
        downloadLink: resource.downloadLink,
        category: heading
      }));
      
      // Show clear visual feedback
      alert("Please login to save resources. Redirecting to login...");
      window.location.href = '/login?from=resources';
      return;
    }
  
    try {
      // Existing save logic...
    } catch (error) {
      console.error("Save error:", error);
      alert(error.message || "Failed to save resource");
    }
  };

  // Rest of your existing code remains exactly the same
  const openModal = (title, resources) => {
    setModalTitle(title);
    setSelectedResources(resources);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="resources-container">
      {/* All your existing JSX remains exactly the same */}
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
        <div className="login-prompt-modal">
          <div className="login-prompt-content">
            <h3>Login Required</h3>
            <p>You need to login to save resources to your dashboard.</p>
            <div className="prompt-actions">
              <button onClick={() => setShowLoginPrompt(false)}>Cancel</button>
              <button onClick={() => {
                localStorage.setItem('pendingResource', JSON.stringify({
                  ...resourceToSave,
                  category: heading
                }));
                window.location.href = '/login?redirect=resources';
              }}>Login</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resources;