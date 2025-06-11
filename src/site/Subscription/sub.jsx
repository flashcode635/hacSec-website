import React from 'react';
import './subscription.css';
const SubscriptionPage = () => {
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
  return (
     <div className="subscription-page">
         <div className="subscription-program-tiers">
        
          <div style={{marginBottom:"65px"}}>  <h2 className="section-title">Subscription Tiers </h2> 
          <p className="section-subtitle">
            Hack Secure provides a range of subscription tiers to suit different learning needs. Choose the subscription tier that best fits your learning needs and goals.
          </p>
          </div>
        <div className="tiers-container">
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
        </div>
      </div>
    </div>

  )};

export default SubscriptionPage;