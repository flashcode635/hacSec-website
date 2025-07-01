// components/CompanyMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './company.css'; // Custom styles

const CompanyMenu = () => {
  return (
    <div className="nav-item company-menu">
      {/* Company option should not be clickable.. just hover */}
        <li><Link > Company </Link></li> 
      <div className="dropdown-menu">
        <Link to="/" className="dropdown-item">About Us </Link>
        <Link to="/team" className="dropdown-item">Team</Link>
        <Link to="/careers" className="dropdown-item">Careers</Link>
        <Link to="/contact" className="dropdown-item">Contact</Link>

      </div>
    </div>
  );
};

export default CompanyMenu;
