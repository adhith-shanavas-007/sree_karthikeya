import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter-bar">
        <h3>STAY CONNECTED WITH US</h3>
        
        <div className="social-icons">
          {/* WhatsApp Icon */}
          <a 
            href="https://wa.me/8848594138" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>

          {/* Facebook Icon */}
          <a 
            href="https://www.facebook.com/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Instagram Icon */}
          <a 
            href="https://www.instagram.com/_sree_karthikeya_520/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* Pinterest Icon */}
          <a 
            href="https://pinterest.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Pinterest"
          >
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <img src={logo} alt="Festoon Logo" className="footer-logo" />
        </div>

        <div className="footer-column">
          <h4>CONTACT</h4>
          <div className="contact-item">
            <span>📞</span> +91 884859438
          </div>
          <div className="contact-item">
            <i className="fab fa-instagram"></i> sree_Karthikeya_events
          </div>
        </div>

        <div className="footer-column">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/products">Products</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>HELP</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © Festoon Props & Rentals.</p>
      </div>
    </footer>
  );
};

export default Footer;