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
        <Link  className="dropdown-item">Brand-kit</Link>
        <Link to="/contact" className="dropdown-item">Contact</Link>
        {/* <details className="dropdown-item">
          <summary>Legal</summary>
          <Link to="/terms" className="dropdown-item">Terms & Service</Link>
          <Link to="/privacy" className="dropdown-item">Privacy Policy</Link>
          <Link to="/data-privacy" className="dropdown-item">Data Privacy Framework</Link>
          <Link to="/organization" className="dropdown-item">Organization</Link>
          <Link to="/headquarters" className="dropdown-item">Headquarters & Branches</Link>
        </details> */}
        <Link to="" className="dropdown-item">Legal</Link>

      </div>
    </div>
  );
};

export default CompanyMenu;
