import React from "react";
import './servicesPage.css';
const CardStructure = ({ data }) => {
  if (!data) return null;

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 className="section-title">{data.title}</h2>
      {data.description && <p className="section-subtitle" style={{ marginBottom: 32 }}>{data.description}</p>}
    
    </div>
  );
};

export default CardStructure;