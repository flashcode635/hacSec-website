import React, { useState } from 'react';
import './subscription.css';
import PricingTable from './priceTable'; // Adjust the import path as necessary

const SubscriptionPage = () => {
  const [selected, setSelected] = useState('human');
  const humanTier = "Enjoy essential features and reliable performance with our Normal plan. Perfect for everyday users who need core functionality and dependable support."

  const proTier = "Unlock advanced tools and priority support with the Pro plan. Designed for power users seeking enhanced capabilities, increased limits, and greater flexibility."
  
  const eliteTier = "Experience the highest level of service with the Elite plan. Gain exclusive access to premium features, personalized assistance, and maximum performance for your most demanding needs."

  return (
     <div className="subscription-page">
      {/* hero section */}
      <div className="subscription-tiers-hero" >
        <h2 className="subscription-hero-title"> Pricing Options </h2>
        <div className='subscription-hero-text'> 
          <span className='subscription-hero-description'>
            Detect and Disrupt Cyberthreats with unprecedented speed and accuracy to reduce your cyber risk
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
          <PricingTable />
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