import React from 'react';
import './PopularCategories.css';

// Import your category images
import goldenLegSofa from '../assets/golden-leg-sofa.jpeg';
import ak from '../assets/chandelie.png';
import furnitur from '../assets/furnitur.png';
import AA from '../assets/AA.png';

const PopularCategories = () => {
  const categories = [
    { id: 1, image: goldenLegSofa, name: "GOLDEN CANDELABRA" },
    { id: 2, image: ak, name: "BIRD CAGE" },
    { id: 3, image: furnitur, name: "WOODEN BARREL" },
    { id: 4, image: AA, name: "CANDLE STAND" },
  ];

  return (
    <section className="popular-categories-section">
      <div className="section-header">
        {/* The animation will trigger when this container is hovered/touched */}
        <div className="racing-container">
          <h2 className="racing-title">POPULAR CATEGORIES</h2>
        </div>
        <div className="divider"></div>
      </div>
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;