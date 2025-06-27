import React, { useState } from 'react';
import './subscription.css';
import PricingTable from './priceTable'; // Adjust the import path as necessary

const SubscriptionPage = () => {
  const [selected, setSelected] = useState('human');
  // shows selected plan of userr 
  const plan = 'Human';
  const[currentPlan, setCurrentPlan] = useState(plan);
  //  currentPlan = Human || Pro || Elite   ( first capital letter necessary)
  const humanTier = "Essential access to LearnX.Get core content, community access, and start exploring cybersecurity at your own pace."

  const proTier = "Full access to all modules, live sessions, and hands-on tasks.Designed for active learners who want depth, tools, and certifications."
  
  const eliteTier = "Premium access with everything in Pro.  with exclusive case studies, 1:1 mentorship, and priority support.Built for those who demand the best."

  return (
     <div className="subscription-page">
      {/* hero section */}
      <div className="subscription-tiers-hero" >
        <h2 className="subscription-hero-title"> Pricing Options </h2>
        <div className='subscription-hero-text'> 
          <span className='subscription-hero-description'>
            Level up your cyber skills and outsmart threats with practical training, real-time tools, and expert-backed learning.
All in one place
          </span>
        </div>
        <div className='subscription-hero-text'> 
          <a href="#subscription-matrix" className='subscription-hero-link'>Learn More</a>
        </div>
        {/* tier list */}
        <div className="subscription-tier-list">
          <button className={`subscription-tier-btn${selected === 'human' ? ' subscription-tier-btn-selected' : ''}`}
            onClick={() => setSelected('human')}
          >
            Human Tier
          </button>
          <button className={`subscription-tier-btn${selected === 'pro' ? ' subscription-tier-btn-selected' : ''}`}
            onClick={() => setSelected('pro')}
          >
            Pro Tier
          </button>
          <button className={`subscription-tier-btn${selected === 'elite' ? ' subscription-tier-btn-selected' : ''}`}
            onClick={() => setSelected('elite')}
          >
            Elite Tier
          </button>
        </div>
        <div className='subscription-tier-selected'>
          {selected === 'human' && <p className='subscription-tier-desc'>{humanTier}</p>}
          {selected === 'pro' && <p className='subscription-tier-desc'>{proTier}</p>}
          {selected === 'elite' && <p className='subscription-tier-desc'>{eliteTier}</p>}
        </div>
      </div>
      {/* subscription grid */}
      <div className="subscription-matrix-section">
        <div className="subscription-matrix-header" id='subscription-matrix'>  
          <h2 className="subscription-matrix-title">Subscription Matrix</h2>
        </div>
        <div>
          <PricingTable currentPlan={currentPlan} />
        </div>
        {/* Custom Plan Option */}
        <div className="subscription-custom-plan">
          <h2 className='subscription-custom-plan-title'>
            Need a Custom Plan?
          </h2>
          <p className='subscription-custom-plan-desc'>
            Contact us for a tailored solution that fits your organization's needs.
          </p>
          <button
            className="subscription-custom-plan-btn"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </div>

  )};

export default SubscriptionPage;