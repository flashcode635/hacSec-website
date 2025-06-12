import { useState } from 'react';
import './courses.css';
import './preview.css';

import coursesList from './courseList'; // Import the coursesList
import { useNavigate } from 'react-router-dom';


const Courses = () => {

  // Import useNavigate from react-router-dom

  const navigate = useNavigate();

  return (
    <div className="courses-page">
      <div className="courses-hero">
        <div className="courses-hero-content">
          <h1>Cybersecurity Training Courses</h1>
          <p>Master the skills needed to protect digital assets and combat cyber threats</p>
        </div>
      </div>
      
      <div className="courses-container">
        <div className="courses-header">
          <h2>Available Courses</h2>
          <p>Explore our comprehensive range of cybersecurity courses designed by industry experts</p>
        </div>
        
        <div className="courses-grid">
          {coursesList.map(course => (
            <div className="course-card" key={course.id}>
              <div className="course-image-container">
                <div className="course-image" style={{ backgroundImage: `url(${course.image})` }}></div>
              </div>
              <div className="course-content" style={{ position: 'relative' }}>
                <div>  <h3>{course.title}</h3>
                <p>{course.description}</p> </div>
               
                <div className="course-meta">
                  <span className="duration">Duration: {course.duration}</span>
                </div>
{/* modlules and level */}
                <div style={{display:"flex"}}>
                  {/* Level Box with green transparent background */}
                <div
                  className="course-level-badge"
                  style={{
                    background: 'rgba(0, 128, 0, 0.2)',
                    color: '#006400',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    display: 'inline-block',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    margin: '8px 0',
                  }}> {course.level} 
                </div>

                  {/* modules */}
                  <div style={{display:'flex',alignItems:'center', marginLeft: '10px'}}>
                        <div style={{paddingTop:'4px', background:"url(https://academy.hackthebox.com/images/pages/front/ic-sections.png) no-repeat center center", backgroundSize: 'contain', width: '20px', height: '20px', marginRight: '5px'}}>                
                        </div>
                        <div> {course.modules} Modules</div>
                  </div>
                </div>
                

                <div style={{marginTop: '10px'}}>
                  <button
                    className="enroll-button"
                    onClick={() => {
                      const courseName = course.title.toLowerCase().replace(/\s+/g, '');
                      navigate(`/${courseName}`);
                    }}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div>
      
      
      
      <div className="courses-cta">
        <div className="cta-content">
          <h2>Ready to advance your cybersecurity career?</h2>
          <p>Join thousands of security professionals who have transformed their careers with our training programs</p>
          <button className="cta-button" >View All Courses</button>
        </div>
      </div>
    </div>
  );
};


export default Courses; 