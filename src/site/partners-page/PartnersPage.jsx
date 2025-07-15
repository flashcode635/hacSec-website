import React from 'react';
import { data, useNavigate } from 'react-router-dom';
import './partnersPage.css';
import GradientButton from '../Components/buttonWithGradient/resource-btn';

const PartnersPage = () => {
  const navigate = useNavigate();
  // Partner program tiers
  const partnerTiers = [
    {
      name: "International Partners",
      description: "Partner globally with Hack-Sec to share knowledge, lead cross-border cybersecurity efforts, and amplify global impact.",
      benefits: [
        "Co-hosted cross-border sessions, webinars, and research",
        "Global visibility and presence",
        "Shared campaigns across regions",
        "Inclusion in Hack-Sec’s Global Partner Network",
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
      description: "Lead local cybersecurity efforts, host events, and grow together through shared resources and collaboration.",
      benefits: [
        "Co-branded webinars, workshops, and campaigns",
        "Early access to Hack-Sec events",
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
        "Promotion across Hack-Sec’s digital platforms",
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
  const partnerBenefit=[
    {
      id:1,
      icon:"https://www.group-ib.com/wp-content/uploads/deals_01.png.webp",
      title:"Market recognition Experts",
      description:"Receive a stable income by selling solutions that can boast at a remarkable renewal rate"
    },
    {
      id:2,
      icon:"https://www.group-ib.com/wp-content/uploads/sale_01.png.webp",
      title:"Enablement and training",
      description:"Close more deals by growing your expertise; provide sales and technical training and necessary materials"
    },
    {
      id:3,
      icon:"https://www.group-ib.com/wp-content/uploads/marketing_01.png.webp",
      title:"Predictable revenue stream",
      description:"Hack-Sec provides comprehensive support throughout every stage of the sales process, including sales, pre-sales, and technical support levels"
    },
    {
      id:4,
      icon:"https://www.group-ib.com/wp-content/uploads/money_03.png.webp",
      title:"Predictable revenue stream",
      description:"Receive stable income by selling solutions that boast a remarkable renewal rate"
    },
    {
      id:5,
      icon:"https://www.group-ib.com/wp-content/uploads/support_07.png.webp",
      title:"Progressive scale of discounts",
      description:"Increase your sales and unlock higher discounts on Hack-Sec products and services"
    },
    {
      id:6,
      icon:"https://www.group-ib.com/wp-content/uploads/market-recognition_01.png.webp",
      title:" Benefits of Marketing Tactics",
      description:"Get assistance with marketing activities and receive progressive marketing rebates as sales ramp up"
    }]


// Meaningful Collaboration

// Work closely with us on events, campaigns, research, or tech services - tailored to mutual goals.


// Business Growth 

// Monetize your expertise by delivering joint services, training, and co-branded offerings with us.


// Academic Integration

// Partner with us to bridge the gap between education and cybersecurity, through internships, workshops, and certifications.

  return (
    <div className="partners-page">
      <div className="partners-hero">
        <div className="partners-hero-content">
          {/* <h1 style={{fontSize:'1.0rem',}}> Hack-Sec Partner Program </h1> */}
          <h1 className="partners-title">Fuel business growth through a
partnership with cybersecurity expert</h1>
          {/* <p className="partners-subtitle" style={{padding:'0'}}>
            Deliver personalized, exclusive, and comprehensive cyber protection to your customers
          </p> */}
          <div className='flex justify-center' style={{width:'59vw',}}> 

          <GradientButton name="Become a Partner" pathname={'#partners-program-tiers'}/>
          </div>
        </div>
      </div>

{/* Benefits of Partnering */}
      <div className="partners-benefits-section" style={{fontFamily:'Nunito'}}>
        <h2 className="section-title" style={{marginBottom:'4%', fontWeight:'500', fontSize:'2.8rem'}}>
          Unlock the benefits of joining the Hack-Sec Partner Program
</h2>
        {/* <div className="benefits-grid">

          <div className="benefit-item">
            <div>
              <div className="benefit-icon">🔒</div>
              <div>
                <h3>Academic Integration</h3> 
              </div>
            </div>
            
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
        
            <p>Work closely with us on events, campaigns, research, or tech services - tailored to mutual goals.</p>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">🌐</div>
            <h3>Global Reach & Reputation</h3>
            <p>Get instant credibility and visibility by aligning with a brand trusted across borders, institutions, and industries</p>
          </div>
        </div> */}
        <div className='grid grid-cols-1 md:grid-cols-3 h-[full] w-[full]'>
          {partnerBenefit.map((data)=>{
            return(

               <div key={data.id} className=' text-center w-[90%] ' style={{padding:'20px'}}>
                <div className='w-[full] flex justify-center' sty> 

            <img src={data.icon} className='h-[120px] w-[120px]' />
                </div>
            <h1 style={{fontSize:'1.6rem', fontWeight:'670'}}> {data.title} </h1>
            <span className='text-gray-500' style={{fontSize:'13px' }}> {data.description} </span>
            </div>
            )

            })}
        </div>
       
      </div>
{/* contact section  */}
    <div className="partners-contact">
        <h2 className="section-title">Ready to Join?</h2>
        <p className="contact-description">
          Get in touch with our partnership team today to discover how we can help your organization.
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
              <button className="tier-apply-button" onClick={() => navigate(`/partner-form?tier=${encodeURIComponent(tier.name)}#partners`)}>Apply Now</button>
            </div>
          ))}
        </div>
      </div>

{/* testimonial section */}
      <div className="partners-testimonial-sections">
        <h2 className="section-title">Partner Success Stories</h2>
        <div className="testimonial-section-card" style={{fontFamily:'Nunito'}}>
          <p className="testimonial-section-text" style={{fontStyle:'normal', }}>
            "Partnering with HackSecure has been transformative for our security offering. 
            Their threat intelligence platform and training resources have allowed us to 
            provide better protection to our clients while growing our business."
          </p>
          <div className="testimonial-section-author" style={{fontWeight:'800'}}>
            <p>John Smith</p>
            <p>CEO, SecureNet Solutions</p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default PartnersPage; 