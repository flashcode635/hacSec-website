import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './resource.css';
// import defensive from './defensive.jpg';

function ResourceCard({ title, description, features, imageUrl, link }) {
  return (
    
    <div className="resource-card">
      <div className="resource-icon">
        <img src={imageUrl} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="resource-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <a href={link} className="resource-link">Learn More →</a>
    </div>
  );
};

const ResourcePage = () => {
  return (
    <>
      <div className="resource-page">
        {/* Hero Section */}
        <section className="resource-hero">
          <div className="resource-hero-content">
            <h1>Learn X </h1>
            <p>Everything you need—tools, internships, Certifications, and smarts—to lock down your digital assets like a pro.</p>
            <button className="hero-cta-button">Request a Consultation</button>
          </div>
        </section>

      {/* resource Overview Section */}
      <section className="resource-overview">
        <div className="container">
          <h2 className="section-title">How We Empower People</h2>
          <p className="section-subtitle">
                HackSecure empowers learners and professionals alike with curated resources and hands-on training to master threat detection, vulnerability remediation, and proactive defense.
          </p>
          
          <div className="resource-grid">  {/* resource Cards Grid - has all 4 resource cards  */}
            
                {/* resource Card 1 - Blogs */}
                  <ResourceCard
                    title="Blogs"
                    description="Explore blogs packed with pro tips, threat intel, and security best practices."
                    features={[
                      "Social Engineering",
                      "API Security",
                      "Network Security",
                      "And Many More...",
                    ]}
                    imageUrl="https://img.icons8.com/ios/50/3498db/security-checked.png"
                    link="#blog"
                  />
                    {/* resource Card 2 - Courses */}
                    <ResourceCard
                    title="Courses"
                    description="Comprehensive courses to level up your cybersecurity knowledge and skills."
                    features={[
                      "Ethical Hacking Fundamentals",
                      "Advanced Network Security",
                      "Reverse Engineering",
                      "And Many More...",
                    ]}
                    imageUrl="https://img.icons8.com/ios/50/3498db/book.png"
                    link="#courses"
                  />

                  {/* resource Card 3 - Certifications */}
                          <ResourceCard
                    title="Certifications"
                    description="Advance your career with top cyber certs—gain skills, credibility and digital defense!"
                    features={[
                      "VAPT",
                      "CompTIA Security+",
                      "Certified Ethical Hacker (CEH)",
                      "And Many More...",
                    ]}
                    imageUrl="https://img.icons8.com/ios/50/3498db/training.png" 
                    link="#certification"
                  />

                    {/* resource Card 4 - Internships */}
                    <div className="resource-card">
                      <div className="resource-icon">
                        <img src="https://img.icons8.com/ios/50/3498db/artificial-intelligence.png" alt="Internships" />
                      </div>
                      <h3>Internships</h3>
                      <p>Hands-on cybersecurity internships with experts, tech, and real-world challenges.</p>
                      <ul className="resource-features">
     
                        <li>Targeted Attack Intelligence</li>              
                        <li>Vulnerability Assessment</li>
                        <li>Incident Response</li>
                 
                        <li>And Many More...</li>
                      </ul>
                      <a href="#intern" className="resource-link">Learn More →</a>
                    </div>

            
          </div>
        </div>
      </section>

      {/* Detaile Sections- have  all the details needed for each resource */}
      <section id="blog" className="resource-detail-section">
        <div className="container">
          <div className="resource-detail">
            <div className="resource-detail-content">
              <h2>Blog</h2>
              <p>Our blog delivers insights to help you spot and fix vulnerabilities before attackers can exploit them.</p>
              <p>Packed with real-world tactics and cutting-edge tools, we break down how cyber threats work—so you can stay one step ahead with practical, expert-backed advice.</p>
              <Link to="/blog" target="_blank" className="resource-detail-cta"> Check Now </Link>
            </div>
            <div className="resource-detail-image blog-image"></div>
          </div>
        </div>
      </section>

      <section id="courses" className="resource-detail-section alt-bg">
        <div className="container">
          <div className="resource-detail reverse">
            <div className="resource-detail-content">
              <h2>Courses</h2>
              <p>Explore our comprehensive courses designed to equip you with the skills and knowledge needed to excel in cybersecurity, from foundational concepts to advanced techniques.</p>
              <p>Our expert instructors guide you through hands-on labs and real-world scenarios, ensuring you gain practical experience and confidence in your abilities.</p>
              <Link to="/courses" target="_blank" className="resource-detail-cta"> Check Now </Link>
            </div>
            <div className="resource-detail-image defensive-image"></div>
          </div>
        </div>
      </section>

      <section id="certification" className="resource-detail-section">
        <div className="container">
          <div className="resource-detail">
            <div className="resource-detail-content">
              <h2>Certifications</h2>
             <p>
              Safeguard your future and outpace cyber adversaries with our industry-leading cybersecurity certifications.
              </p> 
             <p>
              Our expertly crafted programs are tailored to validate and elevate your expertise, empowering you to thrive in today’s fast-paced and ever-changing cybersecurity landscape. Gain practical, in-demand skills recognized by top employers and accelerate your career with confidence.
              </p>
              <Link to="/certification" target="_blank" className="resource-detail-cta"> Check Now </Link>
            </div>
            <div className="resource-detail-image intelligence-image"></div>
          </div>
        </div>
      </section>

      <section id="intern" className="resource-detail-section alt-bg">
        <div className="container">
          <div className="resource-detail reverse">
            <div className="resource-detail-content">
              <h2>Internships</h2>
              <p>
                Experience immersive cybersecurity internships that put you at the forefront of digital defense. Collaborate with industry experts, leverage advanced technologies, and tackle real-world security challenges that matter.
              </p>
              <p>
Build practical skills, gain exclusive insights, and make an immediate impact in the cybersecurity field.
              </p>
                  <Link to="/internship" target="_blank" className="resource-detail-cta"> Check Now </Link>
            </div>
            <div className="resource-detail-image training-image"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="resource-cta">
        <div className="container">
          <h2> Like to Learn More?</h2>
          <p>Contact our team of security experts for a personalized consultation.</p>
          <div className="cta-buttons">
            <button className="cta-primary">Schedule a Call</button>
            <button className="cta-secondary">View Case Studies</button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ResourcePage; 