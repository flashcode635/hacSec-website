import React from 'react';
import './servicesPage.css';
// import defensive from './defensive.jpg';
const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Cybersecurity Services</h1>
          <p>Comprehensive security solutions to protect your digital assets</p>
          <button className="hero-cta-button">Request a Consultation</button>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview">
        <div className="container">
          <h2 className="section-title">How We Protect Your Business</h2>
          <p className="section-subtitle">
            HackSecure provides tailored security solutions for businesses of all sizes, 
            helping you identify threats, remediate vulnerabilities, and prevent attacks before they happen.
          </p>
          
          <div className="services-grid">  {/* Service Cards Grid - has all 4 service cards  */}
            
              {/* Service Card 1 */}
              <div className="service-card">
                <div className="service-icon">
                  <img src="https://img.icons8.com/ios/50/3498db/security-checked.png" alt="Offensive Security" />
                </div>
                <h3>Offensive Security</h3>
                <p>Identify vulnerabilities in your systems before attackers do with our penetration testing and red team operations.</p>
                <ul className="service-features">
                  <li>Web Application Testing</li>
                  <li>Network Infrastructure Testing</li>
                  <li>Mobile Application Testing</li>
                  <li>Cloud Security Assessment</li>
                </ul>
                <a href="#offensive" className="service-link">Learn More →</a>
              </div>

              {/* Service Card 2 */}
              <div className="service-card">
                <div className="service-icon">
                  <img src="https://img.icons8.com/ios/50/3498db/shield.png" alt="Defensive Security" />
                </div>
                <h3>Defensive Security</h3>
                <p>Strengthen your security posture with our defensive security services and proactive threat monitoring.</p>
                <ul className="service-features">
                  <li>Security Architecture Review</li>
                  <li>Threat Detection & Response</li>
                  <li>Security Monitoring</li>
                  <li>Incident Response Planning</li>
                </ul>
                <a href="#defensive" className="service-link">Learn More →</a>
              </div>

              {/* Service Card 3 */}
              <div className="service-card">
                <div className="service-icon">
                  <img src="https://img.icons8.com/ios/50/3498db/artificial-intelligence.png" alt="Threat Intelligence" />
                </div>
                <h3>Threat Intelligence</h3>
                <p>Stay ahead of emerging threats with actionable intelligence tailored to your industry and business.</p>
                <ul className="service-features">
                  <li>Threat Landscape Analysis</li>
                  <li>Targeted Attack Intelligence</li>
                  <li>Dark Web Monitoring</li>
                  <li>Strategic Intelligence Reports</li>
                </ul>
                <a href="#intelligence" className="service-link">Learn More →</a>
              </div>

              {/* Service Card 4 */}
              <div className="service-card">
                <div className="service-icon">
                  <img src="https://img.icons8.com/ios/50/3498db/training.png" alt="Security Training" />
                </div>
                <h3>Security Training</h3>
                <p>Empower your team with the knowledge to recognize and respond to security threats effectively.</p>
                <ul className="service-features">
                  <li>Security Awareness Training</li>
                  <li>Phishing Simulation</li>
                  <li>Technical Security Training</li>
                  <li>Executive Security Briefings</li>
                </ul>
                <a href="#training" className="service-link">Learn More →</a>
              </div>
          </div>
        </div>
      </section>

      {/* Detaile Sections- have  all the details needed for each service */}
      <section id="offensive" className="service-detail-section">
        <div className="container">
          <div className="service-detail">
            <div className="service-detail-content">
              <h2>Offensive Security</h2>
              <p>Our offensive security services help you identify and address vulnerabilities before they can be exploited by malicious actors.</p>
              <p>Using state-of-the-art tools and techniques employed by real attackers, our expert team simulates cyber attacks to test your defenses and provide actionable recommendations.</p>
              <button className="service-detail-cta">Request Service</button>
            </div>
            <div className="service-detail-image offensive-image"></div>
          </div>
        </div>
      </section>

      <section id="defensive" className="service-detail-section alt-bg">
        <div className="container">
          <div className="service-detail reverse">
            <div className="service-detail-content">
              <h2>Defensive Security</h2>
              <p>Build robust defenses against evolving cyber threats with our comprehensive defensive security services.</p>
              <p>From security architecture reviews to continuous monitoring, we help you implement proactive measures to detect, prevent, and respond to security incidents.</p>
              <button className="service-detail-cta">Request Service</button>
            </div>
            <div className="service-detail-image defensive-image"></div>
          </div>
        </div>
      </section>

      <section id="intelligence" className="service-detail-section">
        <div className="container">
          <div className="service-detail">
            <div className="service-detail-content">
              <h2>Threat Intelligence</h2>
              <p>Stay ahead of emerging threats with our actionable threat intelligence services tailored to your business needs.</p>
              <p>Our analysts monitor the threat landscape, including the dark web, to provide timely intelligence about potential threats targeting your industry or organization.</p>
              <button className="service-detail-cta">Request Service</button>
            </div>
            <div className="service-detail-image intelligence-image"></div>
          </div>
        </div>
      </section>

      <section id="training" className="service-detail-section alt-bg">
        <div className="container">
          <div className="service-detail reverse">
            <div className="service-detail-content">
              <h2>Security Training</h2>
              <p>Empower your staff with the knowledge and skills to recognize and respond to security threats effectively.</p>
              <p>Our comprehensive training programs range from basic security awareness for all employees to specialized technical training for security professionals.</p>
              <button className="service-detail-cta">Request Service</button>
            </div>
            <div className="service-detail-image training-image"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to secure your business?</h2>
          <p>Contact our team of security experts for a personalized consultation.</p>
          <div className="cta-buttons">
            <button className="cta-primary">Schedule a Call</button>
            <button className="cta-secondary">View Case Studies</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 