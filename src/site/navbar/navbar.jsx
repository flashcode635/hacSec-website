import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import CompanyMenu from './companyTag';
/**
 * Navbar Component
 * Includes a logo, navigation links, and a hamburger menu for mobile devices.
 * The navbar collapses into a hamburger menu on screens smaller than 768px.
 */
const Navbar = () => {

// setInterval(() => { 
//   fetch('https://hacksec-prv-ltd-backend123.onrender.com/login', {
//     method:'GET'
//   }).then(data => {
//     console.log('Success');
//   }).then()
// }, 16000);

// setInterval(() => { 
//   fetch('https://hacksec-prv-ltd-backend123.onrender.com/signup', {
//     method:'GET'
//   })
// }, 8000);
        

  // State to manage the mobile menu's open/closed status
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <> 
      {/* Logo and hamburger menu container */}
      <div className="navbar-brand">
        {/* Site logo/home link */}
        <Link to="/" className="navbar-logo">
          Hack Secure
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
        <li><Link to="/services" >Services</Link></li>
        <li><Link to="/partners" >Partners</Link></li>
        {/* <li><Link to="/subscription" > Subscription </Link></li> */}
        {/* <li><Link to="/auth" > LearnX</Link></li>  */}
        <li><Link to="/Learn_X" > LearnX</Link></li>


        {/* <li><a href="/Learn_X" > LearnX</a></li> */}
        <CompanyMenu></CompanyMenu>
        {/* Company menu dropdown */}

      </ul>

      {/* Right corner buttons */}
      <div className="right-buttons">
        <Link to="/contact" className="contact-btn" style={{marginRight:'2%', width:'10vw'}}>Contact Us</Link>
        {/* <Link to="/signin" className="sign-in-btn">Sign In</Link> */}
      </div>
    </>
    </nav>
  );
};

export default Navbar;
