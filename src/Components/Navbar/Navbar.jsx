import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; // Ensure no space after .png

const Navbar = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="SkillSwap Logo" className="logo" />
      </nav>
    </div>
  );
};

export default Navbar;