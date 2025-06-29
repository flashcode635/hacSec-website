import React from "react";
import "../styles/certification.css";
import CertificationList from "./CertificationList";

const Certifications = ({heading}) => {
  return (    <div className="certifications-container">
      <div className="certifications-header">
        <h1>{heading}</h1>
        <p>Advance your career with industry-recognized cybersecurity certifications</p>
      </div>
      <CertificationList />
    </div>
  );
};

export default Certifications;