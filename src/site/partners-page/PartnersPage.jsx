import React from 'react';
import { useNavigate } from 'react-router-dom';
import './partnersPage.css';
import GradientButton from '../Components/resource-btn';

const PartnersPage = () => {
  const navigate = useNavigate();
  // Partner program tiers
  const partnerTiers = [
    {
      name: "International Partners",
      description: "We welcome global collaborations to share knowledge, conduct training, and extend our reach beyond regions",
      benefits: [
        "Co-hosted cross-border sessions, webinars, and research",
        "Global visibility and presence",
        "Shared campaigns across regions",
        "Inclusion in Hack Secure’s Global Partner Network",
        "Mutual support in awareness and skill programs"
      ]
    },
    {
      name: "Brand Ambassadors",
      description: "Represent Hack Secure in your campus or network by promoting our initiatives and helping others grow in cybersecurity.",
      benefits: [
        "Certificate and recommendation",
        "Special sessions and rewards",
        "Leadership and outreach experience",
        "Priority access to opportunities",
        "Featured as a verified ambassador"
      ]
    },
    {
      name: "Community Partners",
      description: "We collaborate with student communities, tech groups, and cybersecurity collectives to drive awareness, skill-building, and engagement at a grassroots level.",
      benefits: [
        "Co-branded webinars, workshops, and campaigns",
        "Early access to Hack Secure events",
        "Community exposure across our platforms",
        "Skill development opportunities through CTFs and case-based tasks",
        "Joint content and initiative recognition"
      ]
    },
    {
      name: "Academic Partners",
      description: "We work with schools, colleges, and universities to strengthen cybersecurity education and bridge the gap between industry and academia.",
      benefits: [
        "Internships and real-world project exposure",
        "Guest sessions and workshops",
        "Academic support materials",
        "Campus-level collaboration opportunities",
        "Featured as an Academic Partner"
      ]
    },
    {
      name: "Event Partners and Sponsors",
      description: "collaborate with tech fests, college events, conferences, and cybersecurity summits to deliver high-value content, training, and engagement.",
      benefits: [
        "Promotion across Hack Secure’s digital platforms",
        "Certificates, swags, and recognition for top performers",
        "Flexible collaboration models (virtual or on-site)",
        "Featured in HackSecure’s official sponsor listings",
        "Sponsored segment during events (talks, workshops, or giveaways)"
      ]
    },
    {
      name: "Corporate Partners",
      description: "We collaborate with private sector companies to enhance their security posture, share intelligence, and jointly drive innovation in cybersecurity.",
      benefits: [
        "Talent access through our certified intern and expert pool",
        "Brand visibility in educational and technical ecosystems",
        "Sponsored programs, events, and co-branded content",
        "Listed as an official Corporate Partner"
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
          <GradientButton name="Become a Partner" pathname={'#partners-program-tiers'}/>
        </div>
      </div>

{/* Benefits of Partnering */}
      <div className="partners-benefits-section">
        <h2 className="section-title">Why Partner With HackSecure</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">🔒</div>
            <h3>Academic Integration</h3>
            {/* <p>Access to our proprietary threat intelligence and detection systems</p> */}
            <p>Partner with us to bridge the gap between education and cybersecurity, through internships, workshops, and certifications.</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">📈</div>
            <h3>Business Growth</h3>
            <p>Monetize your expertise by delivering joint services, training, and co-branded offerings with us.</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🔍</div>
            <h3>Meaningful Collaboration</h3>
            {/* <p>Continuous training and knowledge transfer from our security experts</p> */}
            <p>Work closely with us on events, campaigns, research, or tech services - tailored to mutual goals.</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🌐</div>
            <h3>Global Reach & Reputation</h3>
            <p>Get instant credibility and visibility by aligning with a brand trusted across borders, institutions, and industries</p>
          </div>
        </div>
      </div>
{/* Partner Program Tiers -different plans */}
      <div className="partners-program-tiers" id="partners-program-tiers">
        <h2 className="section-title">Partner Program Tiers</h2>
        <p className="section-subtitle">
          Choose the partnership tier that best fits your organization's needs and goals.
        </p>
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
              <button className="tier-apply-button" onClick={() => navigate(`/partner-form?tier=${encodeURIComponent(tier.name)}`)}>Apply Now</button>
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