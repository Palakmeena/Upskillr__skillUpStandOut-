import React, { useState } from 'react';
import "../components/CollapsibleSection.css";

const CollapsibleSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="collapsible-section">
            <div className="section-header" onClick={() => setIsOpen(!isOpen)}>
                <h3 className="section-title">{title}</h3>
                <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
            </div>
            {isOpen && <div className="section-content">{children}</div>}
        </div>
    );
};

export default CollapsibleSection;