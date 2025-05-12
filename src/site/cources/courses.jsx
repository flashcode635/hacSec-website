import React, { useState } from 'react';
import './courses.css';

import coursesList from './courseList'; // Import the coursesList


const Courses = () => {

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
                <div className="course-level">{course.level}</div>
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-meta">
                  <span className="duration">Duration: {course.duration}</span>
                </div>
                <button className="enroll-button" >Enroll Now</button>
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