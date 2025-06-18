import React, { useState } from 'react';
import './subscription.css';
import PricingTable from './priceTable'; // Adjust the import path as necessary
const SubscriptionTiers = [
    // Subscription tiers with benefits
{
  name: "Human Tier",
  description: "Learn hacking basics with rotating labs, beginner paths, and community access. Perfect for newcomers exploring cybersecurity fundamentals.",
  benefits: [
    "Podcasts",
    "Community Access",
    "Case Studies",
    "Official Quiz",
    "Blog and Articles",
    "Checklist and Templates",
    "Audiobooks",
    "Tools - Limited Time",
    "Human Courses",
    "Cyber Laws and Policies",
    "Community Projects",
    "CTFs",
    "Bootcamps"
  ]
},
// intermediate tier
{
  name: "Pro Tier",
  description: "Unlock full labs, advanced paths, cloud hacking, and certificates. Ideal for serious learners preparing for cybersecurity careers.",
  benefits: [
    "Human Tier with all benefits",
    "Investigations",
    "Micro Modules",
    "Webinars",
    "Solutions",
    "Release Notes",
    "Pro Courses",
    "Training Programs",
    "Bootcamps"
  ]
},
// elite tier
{
  name: "Elite Tier",
  description: "Unlock the highest level of training and resources for cybersecurity professionals. Gain access to exclusive content, mentorship, and advanced labs.",
  benefits: [
    "Pro Tier with all benefits",
    "Top Investigations",
    "Sessions",
    "Webinars",
    "Solutions",
    "Release Notes",
    "Training Programs",
    "Elite Courses",
    "1 on 1 Mentorship"
  ]
},

 // Custom tier
{
  name: "Custom",
  description: "Access pro labs, red vs blue, exclusive CTFs, expert sessions, and job tools. For elite cyber professionals.",
  benefits: [
    "Elite tier with all Operator benefits",
    "Exclusive Red vs Blue team-based simulation exercises",
    "Early access to zero-day simulation content",
    "Access to private leaderboards and exclusive competitions",
    "Priority lab access & faster machine resets",
    "Extended Pwnbox time & custom VPN slots",
    "Monthly live workshops with industry experts",
    ]
}
];
const SubscriptionPage = () => {
  const [selected, setSelected] = useState('human');
  const humanTier = "Enjoy essential features and reliable performance with our Normal plan. Perfect for everyday users who need core functionality and dependable support."

  const proTier = "Unlock advanced tools and priority support with the Pro plan. Designed for power users seeking enhanced capabilities, increased limits, and greater flexibility."
  
  const eliteTier = "Experience the highest level of service with the Elite plan. Gain exclusive access to premium features, personalized assistance, and maximum performance for your most demanding needs."

  return (
     <div className="subscription-page">
      {/* hero section */}
      <div className="subscription-program-tiers" >
       
          <h2 className="section-title"> Pricing Options </h2>
          <div className='hero-text'> 
            <span className='description' style={{color:'gray',width:'50vw',textAlign:'center', marginBottom:'0px'}}>
              Detect and Disrupt Cyberthreats with unprecedented speed and accuracy to reduce your cyber risk 
            </span>
          </div>
          {/* hero-text */}
          <div className='hero-text'> 
            <a href="#gird" style={{
              color: '#2563eb',
              textDecoration: 'none',
              padding: '0px 16px',
              borderRadius: '4px',
              backgroundColor: 'transparent',
              
              transition: 'all 0.3s ease',
              display: 'inline-block',
              margin: '10px 0px 20px',
              ':hover': {
                backgroundColor: '#2563eb',
                color: 'white'
              }
            }}>Learn More</a>
          </div>
          {/* tier list */}
          <div style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            margin: '20px 0'
          }}>
            <button className="tier-button"
              onClick={() => setSelected('human')}
              style={{
                backgroundColor: selected === 'human' ? '#2563eb' : 'transparent',
                color: selected === 'human' ? 'white' : 'inherit',
               
              }}
            >
              Human Tier
            </button>
            <button className="tier-button"
              onClick={() => setSelected('pro')}
              style={{
                backgroundColor: selected === 'pro' ? '#2563eb' : 'transparent',
                color: selected === 'pro' ? 'white' : 'inherit',
               
              }}
            >
              Pro Tier
            </button>
            <button className="tier-button"
              onClick={() => setSelected('elite')}
              style={{
                backgroundColor: selected === 'elite' ? '#2563eb' : 'transparent',
                color: selected === 'elite' ? 'white' : 'inherit',
             
              }}
            >
              Elite Tier
            </button>
          </div>

          <div id='tierSelected' style={{ textAlign: 'center', margin: '20px 0' }}>
            {selected === 'human' && <p style={{ fontSize: '18px', fontWeight:'normal' }}>{humanTier}</p>}
            {selected === 'pro' && <p style={{ fontSize: '18px', fontWeight:'normal' }}>{proTier}</p>}
            {selected === 'elite' && <p style={{ fontSize: '18px', fontWeight:'normal' }}>{eliteTier}</p>}
          </div>
              </div>
              {/* subscription grid */}
              <div className="subscription-program-tiers">
          <div style={{marginBottom:"65px"}} id='gird' >  
            <h2 className="section-title">Subscription Matrix</h2>
          {/* <p className="section-subtitle">
            Hack Secure provides a range of subscription tiers to suit different learning needs. Choose the subscription tier that best fits your learning needs and goals.
          </p> */}
          </div>

        {/* <div className="tiers-container">
          {SubscriptionTiers.map((tier, index) => (
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
              <button className="tier-apply-button">Buy Now</button>
            </div>
          ))}
        </div> */}

{/* comparison table */}
        <div> 
        <PricingTable />
        </div>

                                 {/* Custom Plan Option */}
        <div className="custom-plan-option">
            <h2 id='custom-plan-title'>
              Need a Custom Plan?
            </h2>

            <p id='paragraph'>
                Contact us for a tailored solution that fits your organization's needs.
            </p>
            <button
                className="custom-plan-button"
                onMouseOver={e => (e.currentTarget.style.background = "#1e40af")}
                onMouseOut={e => (e.currentTarget.style.background = "#2563eb")}
            >
                Contact Sales
            </button>
        </div>
      </div>
    </div>

  )};

export default SubscriptionPage;