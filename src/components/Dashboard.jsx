import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faExternalLinkAlt, 
  faDownload, 
  faTimes,
  faHome,
  faSadTear
} from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [resources, setResources] = useState([
    { 
      id: 1, 
      title: 'React Hooks Guide', 
      category: 'React', 
      url: 'https://reactjs.org/docs/hooks-intro.html',
      date: '2023-05-15'
    },
    { 
      id: 2, 
      title: 'CSS Grid Tutorial', 
      category: 'CSS', 
      url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
      date: '2023-06-20'
    },
    { 
      id: 3, 
      title: 'JavaScript Algorithms', 
      category: 'JavaScript', 
      url: 'https://github.com/trekhleb/javascript-algorithms',
      date: '2023-07-10'
    }
  ]);

  const userName = "Alex Johnson";

  const filteredResources = resources.filter(resource => 
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRemove = (id) => {
    setResources(resources.filter(resource => resource.id !== id));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`dashboard ${darkMode ? 'dark-mode' : ''}`}>
      <div className="dashboard-header">
        <div className="header-content">
          <h1>
            <span role="img" aria-label="waving hand"></span> Welcome back, {userName}! 
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