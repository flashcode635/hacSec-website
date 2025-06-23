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
      description: "Partner globally with Hack Secure to share knowledge, lead cross-border cybersecurity efforts, and amplify global impact.",
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
      description: "Promote our vision, represent us in your network, and inspire others to join the mission of cybersecurity awareness and innovation.",
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
      description: "Drive local cybersecurity initiatives, host events, and build awareness while growing together through shared resources and collaboration.",
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
      description: "Bring cybersecurity training, workshops, and career opportunities to your institution empowering students with real-world skills and industry exposure.",
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
      description: "Collaborate to support cybersecurity events, gain brand visibility, and engage with a global audience driving real impact.",
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
      description: "Enhance your organization’s cybersecurity strategy, access expert resources, and collaborate on innovative solutions that protect your business and clients.",
      benefits: [
        "Talent access through our certified intern and expert pool",
        "Brand visibility in educational and technical ecosystems",
        "Sponsored programs, events, and co-branded content",
        "Listed as an official Corporate Partner"
      ]
    }
  ];
  const Benefits=[{ title:"Global Reach & Reputation",
    description:"Get instant credibility and visibility by aligning with a brand trusted across borders, institutions, and industries"},
  {title:"Meaningful Collaboration",
    description:"Work closely with us on events, campaigns, research, or tech services - tailored to mutual goals."},];
    const Benefits2=[ {title:" Academic Integration",
    description:"Partner with us to bridge the gap between education and cybersecurity, through internships, workshops, and certifications."},
  {title:"Business Growth ",
    description:"Monetize your expertise by delivering joint services, training, and co-branded offerings with us."},]



// Academic Integration

// Partner with us to bridge the gap between education and cybersecurity, through internships, workshops, and certifications.

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
          <div> 
          {Benefits.map((data, index) => (
              <div className="container noselect " style={{width:'340px', textAlign:'center'}}>
  <div className="canvas" key={index} style={{marginBottom:'30px'}} >
    <div className="tracker tr-1"></div>
    <div className="tracker tr-2"></div>
    <div className="tracker tr-3"></div>
    <div className="tracker tr-4"></div>
    <div className="tracker tr-5"></div>
    <div className="tracker tr-6"></div>
    <div className="tracker tr-7"></div>
    <div className="tracker tr-8"></div>
    <div className="tracker tr-9"></div>
    <div className="tracker tr-10"></div>
    <div className="tracker tr-11"></div>
    <div className="tracker tr-12"></div>
    <div className="tracker tr-13"></div>
    <div className="tracker tr-14"></div>
    <div className="tracker tr-15"></div>
    <div className="tracker tr-16"></div>
    <div className="tracker tr-17"></div>
    <div className="tracker tr-18"></div>
    <div className="tracker tr-19"></div>
    <div className="tracker tr-20"></div>
    <div className="tracker tr-21"></div>
    <div className="tracker tr-22"></div>
    <div className="tracker tr-23"></div>
    <div className="tracker tr-24"></div>
    <div className="tracker tr-25"></div>
    <div id="card">
      <div className="title">    <h3>{data.title}</h3>
            {/* <p>Access to our proprietary threat intelligence and detection systems</p> */}
            <p> {data.description} </p></div>
      {/* <div className="subtitle">
        mouse hover tracker
      </div> */}
      
    </div>
  </div>
</div>
          ))} </div>
    <div> 
      {Benefits2.map((data, index) => (
              <div className="container noselect " style={{width:'340px', textAlign:'center'}}>
  <div className="canvas" key={index} style={{marginBottom:'30px'}} >
    <div className="tracker tr-1"></div>
    <div className="tracker tr-2"></div>
    <div className="tracker tr-3"></div>
    <div className="tracker tr-4"></div>
    <div className="tracker tr-5"></div>
    <div className="tracker tr-6"></div>
    <div className="tracker tr-7"></div>
    <div className="tracker tr-8"></div>
    <div className="tracker tr-9"></div>
    <div className="tracker tr-10"></div>
    <div className="tracker tr-11"></div>
    <div className="tracker tr-12"></div>
    <div className="tracker tr-13"></div>
    <div className="tracker tr-14"></div>
    <div className="tracker tr-15"></div>
    <div className="tracker tr-16"></div>
    <div className="tracker tr-17"></div>
    <div className="tracker tr-18"></div>
    <div className="tracker tr-19"></div>
    <div className="tracker tr-20"></div>
    <div className="tracker tr-21"></div>
    <div className="tracker tr-22"></div>
    <div className="tracker tr-23"></div>
    <div className="tracker tr-24"></div>
    <div className="tracker tr-25"></div>
    <div id="card">
      <div className="title">    <h3>{data.title}</h3>
            {/* <p>Access to our proprietary threat intelligence and detection systems</p> */}
            <p> {data.description} </p></div>
      {/* <div className="subtitle">
        mouse hover tracker
      </div> */}
      
    </div>
  </div>
</div>
          ))}
    </div>

          
        </div>
      </div>
{/* contact section  */}
    <div className="partners-contact">
        <h2 className="section-title">Ready to Join?</h2>
        <p className="contact-description">
          Contact our partnership team today to learn more about how we can help 
          your organization grow while providing enhanced security solutions.
        </p>
        <div className="contact-btns">
          <button className="contact-button primary" onClick={() => {
            const element = document.getElementById('partners-program-tiers');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}> Become a Partner </button>
          <button className="contact-button secondary" onClick={() => navigate('/contact-us')}>Contact Us</button>
        </div>
      </div>

{/* Partner Program Tiers -different plans */}
      <div className="partners-program-tiers" id="partners-program-tiers">
        <h2 className="section-title" >Partner Program Tiers</h2>
        <p className="section-subtitle">
          Choose the partnership tier that best fits your organization's needs and goals.
        </p>
        <div className="tiers-container" id='options' >
          {partnerTiers.map((tier, index) => (
            <div key={index} className="tier-card">
              <h3 className="tier-name" style={{ textAlign: 'unset'}} >{tier.name}</h3>
              <p className="tier-description" style={{ textAlign: 'unset', padding:'2px'}}>{tier.description}</p>
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

      
    </div>
  );
};

export default PartnersPage; 