import React from "react";
import "../styles/certification.css";

const CertificationCard = ({ certification }) => {
  const { title, level, description, duration, prerequisites, icon } = certification;

  return (
    <div className="certification-card">
      <div className="certification-icon">
        <img src={icon} alt={title} />
      </div>
      <div className="certification-content">
        <h3>{title}</h3>
        <span className="level-badge">{level}</span>
        <p className="description" style={{ width: "100%" }}>{description}</p>
        <div className="certification-details">
          <div className="detail-item">
            <span className="detail-label">Duration:</span>
            <span>{duration}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Prerequisites:</span>
            <span>{prerequisites}</span>
          </div>
        </div>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  );
};

export default CertificationCard;