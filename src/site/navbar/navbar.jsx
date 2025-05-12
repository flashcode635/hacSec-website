import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

/**
 * Navbar Component
 * Includes a logo, navigation links, and a hamburger menu for mobile devices.
 * The navbar collapses into a hamburger menu on screens smaller than 768px.
 */
const Navbar = () => {
  // State to manage the mobile menu's open/closed status
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo and hamburger menu container */}
      <div className="navbar-brand">
        {/* Site logo/home link */}
        <Link to="/" className="navbar-logo">
          HackSec
        </Link>
        {/* Hamburger menu button - only visible on mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          {/* Three lines that form the hamburger icon */}
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Navigation links - will collapse on mobile */}
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/partners">Partners</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/jobs">Job Board</Link></li>
        <li><Link to="/internship">Internship</Link></li>
        <li><Link to="/certification">Certification</Link></li>
      </ul>

      {/* Right corner buttons */}
      <div className="right-buttons">
        <Link to="/contact" className="contact-btn">Contact Us</Link>
        <Link to="/signin" className="sign-in-btn">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
