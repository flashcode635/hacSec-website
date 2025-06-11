import React from 'react';
import './servicesPage.css';
import GradientButton from '../Components/resource-btn';
import cardDetails from './cardDetails';

const Gridcars=({data})=>{
  return(
    <>
    {data.map((data) => (
      <div className="service-card" key={data.id}>
        <div className="service-icon">
          <img src={data.icon} />
        </div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <ul className="service-features">
          {data.features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <a href={data.link} className="service-link">Learn More →</a>
      </div>
    ))}
    </>
  )
}

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Cybersecurity Services</h1>
          <p>Comprehensive security solutions to protect your digital assets</p>
          <GradientButton name="Request a Consultation" />
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview">
          <h2 className="section-title">How We Protect Your Business</h2>
          <p className="section-subtitle">
            HackSecure provides tailored security solutions for businesses of all sizes, 
            helping you identify threats, remediate vulnerabilities, and prevent attacks before they happen.
          </p>
        <div className="container">
          {/* Services Grid */}
          <div className='services-grid'>
            <Gridcars data={cardDetails} />
          </div>
        </div>
      </section>

      {/* Detaile Sections- have  all the details needed for each service */}
      <div id="offensive" className="service-detail-section">
        <div className="container">
          <div className="service-detail">
            <div className="service-detail-content">
              <h2>Workshop</h2>
              <p>Our offensive security services help you identify and address vulnerabilities before they can be exploited by malicious actors.</p>
              <p>Using state-of-the-art tools and techniques employed by real attackers, our expert team simulates cyber attacks to test your defenses and provide actionable recommendations.</p>
              <button className="service-detail-cta">Request Service</button>
            </div>
            <div className="service-detail-image offensive-image"></div>
          </div>
        </div>
      </div>

      <section id="defensive" className="service-detail-section alt-bg">
        <div className="container">
          <div className="service-detail reverse">
            <div className="service-detail-content">
              <h2>Sessions</h2>
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
              <h2>Webinars</h2>
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
              <h2>Solutions</h2>
              <p>Empower your staff with the knowledge and skills to recognize and respond to security threats effectively.</p>
              <p>Our comprehensive training programs range from basic security awareness for all employees to specialized technical training for security professionals.</p>
              <button className="service-detail-cta">Request Service</button>
              {/* <GradientButton name="Request Consultation" /> */}
            </div>
            <div className="service-detail-image training-image"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
          <h2>Ready to secure your business?</h2>
          <p>Contact our team of security experts for a personalized consultation.</p>
        <div className="container">
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