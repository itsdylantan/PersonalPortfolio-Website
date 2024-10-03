// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo"> {/* Link added to the logo */}
        <h1>Dylan's Portfolio</h1>
      </Link>
      
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
        <li><Link to="/resume" onClick={toggleMenu}>Resume</Link></li>
        <li><Link to="/work-experience" onClick={toggleMenu}>Work Experience</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
