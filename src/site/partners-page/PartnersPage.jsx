import React from 'react';
import './partnersPage.css';
import GradientButton from '../Components/resource-btn';

const PartnersPage = () => {
  // Partner program tiers
  const partnerTiers = [
    {
      name: "ELITE",
      description: "For organizations with advanced cybersecurity expertise seeking the highest level of partnership",
      benefits: [
        "Priority access to new threat intelligence",
        "Dedicated technical account manager",
        "Custom training programs",
        "Co-marketing opportunities",
        "Higher margins on all solutions"
      ]
    },
    {
      name: "PROFESSIONAL",
      description: "For established security service providers looking to expand their offerings",
      benefits: [
        "Specialized product training",
        "Regular threat intelligence updates",
        "Technical support",
        "Marketing resources",
        "Competitive margins"
      ]
    },
    {
      name: "ASSOCIATE",
      description: "Entry-level partnership for growing security providers",
      benefits: [
        "Basic product training",
        "Standard support",
        "Partner portal access",
        "Sales enablement tools",
        "Standard margins"
      ]
    }
  ];

  return (
    <div className="partners-page">
      <div className="partners-hero">
        <div className="partners-hero-content">
          <h1 className="partners-title">MSSP and MDR Partner Program</h1>
          <p className="partners-subtitle">
            Join forces with HackSecure to build stronger security services and expand your business.
            Our partner program empowers MSSPs and MDR providers with cutting-edge technologies and comprehensive support.
          </p>
          <GradientButton name="Become a Partner" />
        </div>
      </div>

{/* Benefits of Partnering */}
      <div className="partners-benefits-section">
        <h2 className="section-title">Why Partner With HackSecure</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">🔒</div>
            <h3>Advanced Threat Detection</h3>
            <p>Access to our proprietary threat intelligence and detection systems</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">📈</div>
            <h3>Business Growth</h3>
            <p>Expand your service offerings and increase customer retention</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🔍</div>
            <h3>Deep Expertise</h3>
            <p>Continuous training and knowledge transfer from our security experts</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🌐</div>
            <h3>Global Presence</h3>
            <p>Join a network of partners across industries and regions</p>
          </div>
        </div>
      </div>
{/* Partner Program Tiers -different plans */}
      <div className="partners-program-tiers">
        <h2 className="section-title">Partner Program Tiers</h2>
        <div className="tiers-container">
          {partnerTiers.map((tier, index) => (
            <div key={index} className="tier-card">
              <h3 className="tier-name">{tier.name}</h3>
              <p className="tier-description">{tier.description}</p>
              <div className="tier-benefits">
                <h4>Benefits</h4>
                <ul>
                  {tier.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <button className="tier-apply-button">Apply Now</button>
            </div>
          ))}
        </div>
      </div>

      <div className="partners-testimonials">
        <h2 className="section-title">Partner Success Stories</h2>
        <div className="testimonial-card">
          <p className="testimonial-text">
            "Partnering with HackSecure has been transformative for our security offering. 
            Their threat intelligence platform and training resources have allowed us to 
            provide better protection to our clients while growing our business."
          </p>
          <div className="testimonial-author">
            <p><strong>John Smith</strong></p>
            <p>CEO, SecureNet Solutions</p>
          </div>
        </div>
      </div>

      <div className="partners-contact">
        <h2 className="section-title">Ready to Join?</h2>
        <p className="contact-description">
          Contact our partnership team today to learn more about how we can help 
          your organization grow while providing enhanced security solutions.
        </p>
        <div className="contact-btns">
          <button className="contact-button primary">Become a Partner</button>
          <button className="contact-button secondary">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage; 