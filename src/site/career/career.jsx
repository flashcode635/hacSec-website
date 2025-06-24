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
      <div style={{display:"flex", 
        // justifyContent:"center", 
        alignItems:"center", flexDirection:"row", gap:"20px",marginTop:"30px", height:"80px"}}>
         <button className="hero-cta-button"> <Link to="/internship"> Join Now</Link></button>  
          
        {/* <div className="navbar-links">
            <ul> 
                <li>  <Link to="/internship" className="resource-detail-cta" > Check Now </Link> </li>  
            </ul> 
        </div> */}
        </div>
    </div>
    <Middle /> 
      {/* <div className={`contact-section 
        ${animate ? 'visible' : ''}
        `}>
        <h2>Submit Your Resume</h2>
        <p>If you didn't find a suitable position, feel free to submit your resume for future opportunities</p>
        <div className="navbar-links" style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  gap: "20px"
}}>
  <a href="/contact" className="contact-buttons">
    Contact Recruitment Team
  </a>
</div>

      </div> */}
      <div className='flex items-center justify-center flex-row bg-[#5f5d5d96] coloring' style={{height:"50vh"}}> 
    <div className='grid grid-cols-1  '> 
      <h2 className='col-span-1 items-center justify-center ' style={{textAlign:'center'}}>Submit Your Resume</h2>
      <p className='col-span-1 text-center' style={{color:"#aba9a9"}}>Think you have what it takes to join our team? Submit your resume </p>
      <div className="clickable-things-cover  col-span-1 text-center " style={{
        marginTop:"20px",
         
        gap: "20px"
      }}>
        <a href="/contact" className="clickable-things" style={{}}>
          Contact Recruitment Team
        </a>
      </div>
    </div>
    </div>
    </>
    );
};

export default CareerPage;
