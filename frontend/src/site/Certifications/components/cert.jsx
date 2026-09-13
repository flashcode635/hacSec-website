import React from "react";
import "../styles/certification.css";
import CertificationList from "./CertificationList";

const Certifications = ({heading}) => {
  return (    
  <div className="certifications-container">
      <div className="certifications-header">
        <h1>{heading}</h1>
        <span style={{width:'60vw'}}>Advance in your career with industry-recognized cybersecurity certifications designed to equip you with the skills demanded by today's job market.</span>
      </div>
      <div style={{margin:'2rem 0'}}>
      <CertificationList />
      </div>
    </div>
  );
};

export default Certifications;