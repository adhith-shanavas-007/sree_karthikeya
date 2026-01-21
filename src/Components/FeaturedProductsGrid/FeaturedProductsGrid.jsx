import React from 'react';
import './FeaturedProductsGrid.css';

// Import your product images
import goldenLegSofa from '../../assets/golden-leg-sofa.jpeg';
import ak from '../../assets/chandelie.png';
import furnitur from '../../assets/furnitur.png';
import prop from '../../assets/prop.jpeg';
import ck from '../../assets/ck.jpeg';
import AA from '../../assets/AA.png';
import img from "../../assets/WW.png";
import mm from '../../assets/mm.png';

const FeaturedProductsGrid = () => {
  const products = [
    { id: 1, image: goldenLegSofa, name: "" },
    { id: 2, image: ak, name: "" },
    { id: 3, image: prop, name: "" },
    { id: 4, image: furnitur, name: "" },
    { id: 5, image: mm, name: "" },
    { id: 6, image: ck, name: "" },
    { id: 7, image: AA, name: "" },
    { id: 8, image: img, name: "" }, 
  ]; 

  return (
    <section className="featured-products-grid">
      {products.map((product, index) => (
        <div 
          key={product.id} 
          className="product-card" 
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <div className="image-wrapper">
            <img src={product.image} alt={product.name} className="one-minute-zoom" />
          </div>
          <div className="product-info">
             <h4>{product.name}</h4>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturedProductsGrid;