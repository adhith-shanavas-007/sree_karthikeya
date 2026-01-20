import React from 'react';
import './BestCollections.css';

// Import your images
import chandelier from '../../assets/chandelier.jpeg';
import props from '../../assets/props.jpeg';
import furniture from '../../assets/furniture.png';

const BestCollections = () => {
  return (
    <section className="best-collections-section">
      <div className="left-panel">
        {/* The title now has an auto-pulse effect */}
        <h2 className="pulse-title">BEST COLLECTIONS</h2>
      </div>
      <div className="right-panel">
        <div className="collection-card">
          <div className="image-zoom-wrapper">
            <img src={chandelier} alt="Kavadi" />
          </div>
          <div className="label">Kavadi</div>
        </div>
        <div className="collection-card">
          <div className="image-zoom-wrapper">
            <img src={props} alt="Devotee" />
          </div>
          <div className="label">Devotee of Lord Murugan</div>
        </div>
        <div className="collection-card">
          <div className="image-zoom-wrapper">
            <img src={furniture} alt="Kathakali" />
          </div>
          <div className="label">Kathakali Dancer</div>
        </div>
      </div>
    </section>
  );
};

export default BestCollections;