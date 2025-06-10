import React from 'react';
import './subscription.css';
const SubscriptionPage = () => {
    const SubscriptionTiers = [
        // Subscription tiers with benefits
    {
      name: "Free",
      description: "Learn hacking basics with rotating labs, beginner paths, and community access. Perfect for newcomers exploring cybersecurity fundamentals.",
      benefits: [
        "Free tier",
        "Access to limited training labs (rotating weekly)",
        "Intro-level CTFs and walkthroughs",
        "Access to fundamental learning paths",
        "Community forum & Discord access",
        "Basic progress tracking"
      ]
    },
    // intermediate tier
    {
      name: "Pro",
      description: "Unlock full labs, advanced paths, cloud hacking, and certificates. Ideal for serious learners preparing for cybersecurity careers.",
      benefits: [
        "Pro tier with full lab access",
        "Full access to all labs and retired machines",
        "Intermediate and advanced training modules",
        "Cloud-hosted Pwnbox (browser-based hacking environment)",
        "Advanced progress tracking & certifications",
        "Monthly Pro-only CTF challenges",
        ]
    },
    // elite tier
    {
      name: "Elite",
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
        
          <div style={{marginBottom:"65px"}}>  <h2 className="section-title">Subscription Tiers </h2> </div>
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