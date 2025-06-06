// components/CompanyMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './company.css'; // Custom styles

const CompanyMenu = () => {
  return (
    <div className="nav-item company-menu">
        <li><Link to="/contact"> Company </Link></li>
      {/* <button className="nav-link">Company</button> */}
      <div className="dropdown-menu">
        <Link to="/" className="dropdown-item">About Us </Link>
        <Link to="/team" className="dropdown-item">Team</Link>
        <Link to="/certification" className="dropdown-item">Certifications</Link>
        <Link to="/careers" className="dropdown-item">Careers</Link>
        <Link to="/internship" className="dropdown-item">Internship</Link>
        <Link to="/contact" className="dropdown-item">Contact</Link>
      </div>
    </div>
  );
};

export default CompanyMenu;
