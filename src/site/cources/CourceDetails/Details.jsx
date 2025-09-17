import React, { useState } from "react";
import "./details.css";
 

const summaryList = [
  "Mindset",
  "Learning Efficiency and learning types",
  "Documentation",
  "Organization",
  "Focus",
  "Attention",
  "Dealing with Frustration"
];
const moduleOverview = [
  "The field of information security is massive. It would be impossible for any one person to learn everything. Let us take the following example:",
  "Imagine you want to become a programmer, and you know that there are more than 200 different programming languages that can be used to create applications that can be cracked by debugging or reverse engineering. If we learned every programming language within 100 hours, we would spend 20,000 hours or 2,500 days (8 hours per day) or, in other words, almost seven years to learn all of these programming languages. As a result, we spent seven years learning all these languages and never tried to debug or reverse engineer the program we created. Great! Let us spend another seven years learning to debug and reverse engineering",
  "We have got the idea. No one wants to spend so much time on just one area. Furthermore, this is not necessary. We will need some time to learn different technical principles, structures, and processes, but we will not need to spend seven years. Every programming language has its own strengths and weaknesses. Also, if we can obtain a deep understanding of a single programming language, we will learn others much faster. We do not need to learn every programming language to understand how to read their code. "
]
const sectionsList = [
  "Way Of Thinking",
  "Think Outside the Box",
  "Occam's Razor",
  "Talent",
  "Way Of Learning",
  "Learning Efficiency",
  "Learning Types",
  "The Brain",
  "The Will",
  "The Goal",
  "Decision Making",
  "Documentation",
  "Organization",
  "Focus",
  "Attention",
  "Comfort",
  "Obstacles",
  "Questioning",
  "Handling Frustration",
  "Learning Progress"
];

import { useParams } from 'react-router-dom';
import coursesList from '../courseList';

// Main Details component that displays course details
// This component receives the course name from URL parameter and finds the matching course from coursesList
export default function Details() {
  // Get the course name from URL parameter (e.g., /courses/learning-process)
  const { courseName } = useParams();
  
  // Find the matching course from coursesList based on URL parameter
  // We encode the course title to match the URL format (spaces replaced with hyphens)
  // If no match is found, fallback to first course in the list
  const course = coursesList.find(c => 
    encodeURIComponent(c.title.toLowerCase().replace(/\s+/g, '-')) === courseName
  ) || coursesList[0];

  // State variables for UI components
  // activeTab controls which tab is currently active (summary/overview)
  // selectedSection stores the currently selected section when viewing module overview
  const [activeTab, setActiveTab] = useState("summary");
  const [selectedSection, setSelectedSection] = useState(null);
  
  // Example content for each section (add more as needed)
  const sectionContent = {
    "Way Of Thinking": "Way Of Thinking: This section explores the mindset required for effective learning in information security.",
    "Think Outside the Box": "Think Outside the Box: Learn how creative problem solving is essential in infosec.",
    "Occam's Razor": "Occam's Razor: The simplest solution is often the best. Apply this principle to troubleshooting.",
    "Talent": "Talent: Understand the role of talent versus hard work in mastering new skills.",
    "Way Of Learning": "Way Of Learning: Discover different approaches to learning and how to find what works for you.",
    "Learning Efficiency": "Learning Efficiency: Tips and techniques to maximize your learning speed and retention.",
    "Learning Types": "Learning Types: Explore various learning styles and how to leverage them.",
    "The Brain": "The Brain: Insights into how your brain processes and stores information.",
    "The Will": "The Will: The importance of motivation and perseverance.",
    "The Goal": "The Goal: Setting clear, achievable goals for your learning journey.",
    "Decision Making": "Decision Making: How to make effective decisions during your studies.",
    "Documentation": "Documentation: The value of keeping good notes and records.",
    "Organization": "Organization: Structuring your learning process for maximum efficiency.",
    "Focus": "Focus: Techniques to improve your concentration.",
    "Attention": "Attention: Managing distractions and maintaining attention.",
    "Comfort": "Comfort: Creating a comfortable learning environment.",
    "Obstacles": "Obstacles: Overcoming common challenges in learning.",
    "Questioning": "Questioning: The importance of curiosity and asking questions.",
    "Handling Frustration": "Handling Frustration: Strategies to deal with setbacks.",
    "Learning Progress": "Learning Progress: Tracking and reflecting on your progress."
  };

  

  return (
    <div className="lp-root">
      {/* Course Hero Section - Main header with course information */}
      <div className="lp-hero">
        <div className="lp-hero-info">
          {/* Back button to return to courses list */}
          <a  className="lp-back" onClick={() => {
            window.history.back();
          }} > 
            &lt; Back to Courses</a>

          {/* Course title - falls back to "Course Title" if not found */}
          <h2 style={{ color: '#eee9e9' , marginBottom:'14px'}}>{course.title || "Course Title"}</h2>
          
          {/* Course tags/categories */}
          <div className="lp-tags">
            <span className="lp-tag">Fundamental</span>
            <span className="lp-tag">General</span>
          </div>
          
          {/* Course description - falls back to "hello" if not found */}
          <p className="lp-hero-desc">
            {course.description || "hello"}
          </p>
          <div className="lp-rating">
            <span className="lp-rating-score">4.96</span>
            <span className="lp-stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="lp-star">&#9733;</span>
              ))}
            </span>
          </div>
          <div className="lp-created">
            Created by <span className="lp-author">Cry0l1t3</span>
          </div>
          <div className="lp-hero-buttons">
            <button className="lp-btn lp-btn-green">Start Module</button>
            <button className="lp-btn lp-btn-dark">Hack Secure Business</button>
          </div>
        </div>
        <div className="lp-hero-image">
          <div className="lp-image-placeholder">
            {/* Replace with actual image if available */}
            <span className="lp-image-text">Learning Process</span>
          </div>
        </div>
      </div>

      <div className="lp-main">
        {/* Tabs */}
        <div className="lp-tabs">
          
          <div  style={{ width:'70%'}}> 
            <div style={{ display: "flex"}} > 

              {/* Summary Tab */}
              <div
                className={`lp-tab${activeTab === "summary" ? " lp-tab-active" : ""}`}
                onClick={() => { setActiveTab("summary"); setSelectedSection(null); }}
                style={{
                  borderBottom: activeTab === "summary" ? "3px solid #47d4b9" : "3px solid transparent",
                  transition: "border-bottom 0.2s"
                }}
              >
                Summary
              </div>
              {/* Overview Tab */}
              <div
                className={`lp-tab${activeTab === "overview" ? " lp-tab-active" : ""}`}
                onClick={() => { setActiveTab("overview"); setSelectedSection(null); }}
                style={{
                  borderBottom: activeTab === "overview" ? "3px solid #47d4b9" : "3px solid transparent",
                  transition: "border-bottom 0.2s"
                }}
              >
                Module Overview
              </div>

            </div>
          </div>
           {/* Tab Content */}
          <div className="lp-tab-content">
            {activeTab === "summary" ? (
              <>
                <h2 className="lp-section-title">Summary</h2>
                <div className="lp-summary">
                  <p>
                    This module covers various stages of the learning process, such as:
                  </p>
                  <ul>
                    {summaryList.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p>
                    The principles covered in this module will benefit you greatly as you embark on, or continue, your infosec journey.
                  </p>
                </div>
              </>
            ) : (
              <>
                <h2 className="lp-section-title">Module Overview</h2>
                <div className="lp-summary">
                  {selectedSection ? (
                    <div className="lp-section-detail">
                      <h3>{selectedSection}</h3>
                      <p>{sectionContent[selectedSection]}</p>
                      <button className="lp-btn lp-btn-dark" onClick={() => setSelectedSection(null)}>Back to Sections</button>
                    </div>
                  ) : (
                    <>
                      <p>
                        This module covers various stages of the learning process, such as:
                      </p>
                      <ul>
                        {moduleOverview.map(item => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <p>
                        The principles covered in this module will benefit you greatly as you embark on, or continue, your infosec journey.
                      </p>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
        
 {/* Sections */}
      <div className="lp-sections">
          <h2 className="lp-section-title">Sections</h2>
          <ul>
            {sectionsList.map((section, i) => (
              <li
                key={section}
                className="lp-section-item"
                style={{ cursor: activeTab === "overview" ? "pointer" : "default" }}
                onClick={() => {
                  if (activeTab === "overview") setSelectedSection(section);
                }}
              >
                <span className="lp-section-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#47d4b9"><rect width="18" height="18" rx="3" fill="#111827"/><path d="M7 13l3 3 7-7" stroke="#47d4b9" strokeWidth="2" fill="none"/></svg>
                </span>
                {section}
                {i === 0 && <span className="lp-preview-tag">PREVIEW</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>

         
         
    </div>
  );
}