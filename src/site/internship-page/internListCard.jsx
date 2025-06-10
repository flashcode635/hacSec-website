import React, { useState, useEffect } from 'react';
import './internshipList.css';

const InternshipList = () => {
  // State for animation classes
  const [animate, setAnimate] = useState(false);
  
  // List of available internships
  const internships = [
    {
      id: 1,
      title: "Front End Developer Intern",
      department: "Security Operations",
      duration: "3 months",
      type: "Full-time",
      location: "Remote / On-site",
      description: "Join our front-end development team to help build and enhance user-facing features. Use modern frameworks, optimize user interfaces, and ensure a seamless and responsive user experience and collaborate with designers and back-end developers to deliver high-quality web applications.",
      requirements: [
        "Currently pursuing a degree in Computer Science, Cybersecurity or related field",
        "Basic understanding of networking and security concepts",
        "Problem-solving skills and attention to detail",
        "Familiarity with UI library is a plus.",
        "Good communication skills"
      ]
    },
    {
      id: 2,
      title: "Design Intern",
      department: "Offensive Security",
      duration: "4 months",
      type: "Full-time",
      location: "On-site",
      description: "Work alongside our ethical hackers to identify and exploit security vulnerabilities. Learn methodologies, tools, and techniques used in real-world penetration testing.",
      requirements: [
        "Currently pursuing a degree in Computer Science, Cybersecurity or related field",
        "Knowledge of web applications and common security vulnerabilities",
        "Familiarity with programming/scripting languages (Python, Bash)",
        "Understanding of network protocols and security concepts"
      ]
    },
    {
      id: 3,
      title: "Community Manager Intern",
      department: "Cloud Security",
      duration: "6 months",
      type: "Full-time",
      location: "Remote",
      description: "Help build and secure cloud infrastructure. Learn about implementing security controls in CI/CD pipelines and cloud environments.",
      requirements: [
        "Currently pursuing a degree in Computer Science or related field",
        "Basic understanding of cloud services (AWS, Azure, or GCP)",
        "Familiarity with containerization technologies (Docker, Kubernetes)",
        "Basic programming skills in at least one language",
        "Good communication skills"
      ]
    },
    {
      id: 4,
      title: "Back-end  Intern",
      department: "Research & Development",
      duration: "3-6 months",
      type: "Part-time/Full-time",
      location: "Remote",
      description: "Conduct research on emerging threats and vulnerabilities. Help develop new security tools and methodologies to combat modern threats.",
      requirements: [
        "Currently pursuing an advanced degree in Computer Science, Cybersecurity or related field",
        "Strong analytical and research skills",
        "Experience with programming (Python, C/C++, or similar)",
        "Ability to document and present findings clearly"
      ]
    }
  ];

  // Add animation class after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="internship-list-container">
      <div className={`internship-list-header ${animate ? 'visible' : ''}`}>
        <h1>Available Internship Positions</h1>
        <p>Take the first step in your cybersecurity career with HackSecure's internship program</p>
      </div>
      
      <div className="internship-filters">
        <div className="filter-info">
          <span>Showing {internships.length} positions</span>
        </div>
      </div>
      
      <div className="internship-cards">
        {internships.map((internship, index) => (
          <div 
            key={internship.id} 
            className={`internship-card ${animate ? 'visible' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="internship-card-header">
              <h2>{internship.title}</h2>
              <div className="internship-badges">
                <span className="badge department">{internship.department}</span>
                <span className="badge duration">{internship.duration}</span>
                <span className="badge type">{internship.type}</span>
              </div>
            </div>
            
            <div className="internship-card-body">
              <div className="internship-location">
                <span>Location: {internship.location}</span>
              </div>
              <p className="internship-description">{internship.description}</p>
              
              <div className="internship-requirements">
                <h3>Requirements:</h3>
                <ul>
                  {internship.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="internship-card-footer">
              <button className="apply-button">Apply Now</button>
              <button className="details-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className={`no-positions-notice ${internships.length === 0 ? 'visible' : ''}`}>
        <h2>No internship positions available at the moment</h2>
        <p>Please check back later or subscribe to our newsletter to be notified when new positions open up</p>
      </div>
      {/* Contact section for submitting resumes */}
        <div className={`contact-section ${animate ? 'visible' : ''}`}>
        <h2>Didn't Find What You're Looking For?</h2>
        <p>If you didn't find a suitable position, feel free to submit your resume for future opportunities.</p>
        <button className="contact-button">Contact Recruitment Team</button>
      </div>
    </div>
  );
};

export default InternshipList; 