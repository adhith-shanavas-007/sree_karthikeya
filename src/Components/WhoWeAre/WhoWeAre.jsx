import React from 'react';
import './WhoWeAre.css';
import whoWeAreImage from '../../assets/who-we-are.png'; 

const WhoWeAre = () => {
  const descriptionText = "Welcome to Festival Sreekarthikeya — South India's No.1 Festival Props & Costume Rental Hub. We bring your celebrations to life with stunning props, vibrant costumes, and artistic setups for temple festivals, cultural events, and stage shows. From divine idols to colorful kavadi and unique mascot designs, we offer everything you need to make your event unforgettable. Make every moment shine with our creative and ready-to-rent festival collections.";

  return (
    <section className="who-we-are-section">
      <div className="content-wrapper">
        <div className="text-content">
          <h2 className="section-title">WHO WE ARE</h2>
          <div className="section-description">
            <span className="typewriter-text">{descriptionText}</span>
          </div>
        </div>
        <div className="image-content">
          <img
            src={whoWeAreImage}
            alt="Festival Event Setup"
            className="who-we-are-image"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;