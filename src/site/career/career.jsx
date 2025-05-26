import React from 'react';
import './career.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';


import { useState } from 'react';
import Middle from './middle';

const CareerPage = () => {
  // Set animate to false or true as needed, or implement animation logic
  const [animate, setAnimate] = useState(true);

  return (
    <> 
    <div className="career-page">
      <div className="career-header">
        <h1>Be the Part of Our Mission</h1>
        <p>Stand at the front lines in the fight against cybercrime. Join our team and become a top-notch cybersecurity professional, dedicated to making the digital space a safer place.</p>
      </div>
      {/* <span style={{paddingLeft:"20px"}} /> */}
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"row", gap:"20px",marginTop:"30px", height:"80px"}}>
         <button className="hero-cta-button">Join Now</button>  
          
        <div className="navbar-links">
            <ul> 
                <li>  <Link to="/internship" target="_blank" className="resource-detail-cta" > Check Now </Link> </li>  
            </ul> 
        </div>
        </div>
    </div>
    <Middle /> 
      <div className={`contact-section ${animate ? 'visible' : ''}`}>
        <h2>Submit Your Resume</h2>
        <p>If you didn't find a suitable position, feel free to submit your resume for future opportunities</p>
        <div className="navbar-links" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"row", gap:"20px"}}>
            <ul> 
                <li>  <Link to="/contact" target="_blank" className="contact-buttons" > Contact Recruitment Team </Link> </li>  
            </ul> 
        </div>
      </div>
    
    </>
    );
};

export default CareerPage;
