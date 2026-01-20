// src/components/HeroSlider.jsx
import React, { useState, useEffect } from "react";
import "./HeroSlider.css";

// Import your images
import indoorEvent from "../../assets/indoor-event.png";
import outdoorWedding from "../../assets/outdoor-wedding.png";

const HeroSlider = () => {
  const slides = [
    {
      image: indoorEvent,
    },
    {
      image: outdoorWedding,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="slide-image"
          />
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;