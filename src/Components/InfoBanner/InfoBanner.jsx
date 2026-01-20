// src/components/InfoBanner.jsx
import React, { useRef, useEffect, useState } from 'react';
import './InfoBanner.css';

const InfoBanner = () => {
  const bannerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      className={`bar ${isVisible ? 'visible' : ''}`}
    >
      <h1>
        South India’s No.1 Festival Props Rental – Make Every Festival Grand with Ease
      </h1>
    </div>
  );
};

export default InfoBanner;