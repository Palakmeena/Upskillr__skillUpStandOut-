import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faExternalLinkAlt, 
  faDownload, 
  faTimes,
  faHome,
  faSadTear
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';
import { getSavedResources, deleteSavedResource } from "../services/api";
import './Dashboard.css';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchSavedResources = async () => {
      try {
        const response = await getSavedResources();
        setResources(response.data.savedResources.map(res => ({
          id: res.id,
          title: res.resource.title,
          category: res.resource.category,
          url: res.resource.viewLink,
          date: res.savedDate
        })));
      } catch (error) {
        console.error('Error fetching saved resources:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchSavedResources();
  }, []);

  const handleRemove = async (id) => {
    try {
      await deleteSavedResource(id);
      setResources(resources.filter(resource => resource.id !== id));
    } catch (error) {
      console.error('Error removing resource:', error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const filteredResources = resources.filter(resource => 
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  return (
    <div className={`dashboard ${darkMode ? 'dark-mode' : ''}`}>
      <div className="dashboard-header">
        <div className="header-content">
          <h1>
            Welcome back, {user?.name || 'User'}! 
            <span className="resource-count">{filteredResources.length} saved resources</span>
          </h1>
          <div className="header-actions">
            <button className="home-btn" onClick={() => window.location.href = '/'}>
              <FontAwesomeIcon icon={faHome} /> Home
            </button>
            <button className="mode-toggle" onClick={toggleDarkMode}>
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>
        
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="Search by title or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="resources-container">
        {filteredResources.length > 0 ? (
          <div className="resources-grid">
            {filteredResources.map(resource => (
              <div className="resource-card" key={resource.id}>
                <div className="card-header">
                  <span className={`category-tag ${resource.category.toLowerCase()}`}>
                    #{resource.category}
                  </span>
                  <button 
                    className="remove-btn"
                    onClick={() => handleRemove(resource.id)}
                    aria-label="Remove resource"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
                <h3>{resource.title}</h3>
                <p className="resource-date">Saved on {new Date(resource.date).toLocaleDateString()}</p>
                <div className="card-actions">
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="action-btn view"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> View
                  </a>
                  <button className="action-btn download">
                    <FontAwesomeIcon icon={faDownload} /> Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <FontAwesomeIcon icon={faSadTear} size="3x" />
            <h3>No saved resources found</h3>
            <p>{searchTerm ? 'Try a different search term' : 'Start saving resources to see them here'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;