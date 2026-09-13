import React, { useState } from 'react';
import './pay.css';
import { useRecoilValue } from 'recoil';
import { userState } from '../../state/authState';
import AuthModal from '../signUpAuth/AuthModal';

const paymentCards = [
  {
    id: 1,
    title: 'Human',
    description: 'Replace your AV solution with superior threat detection, 1 month free trial',
    cost: 'Free trial'
  },
  {
    id: 2,
    title: 'Pro',
    description: 'Hunt for threats and remove risk with granular controls. Get valueable sources to accelrate career',
    cost: '$5/month'
  },
  {
    id: 3,
    title: 'Elite',
    description: 'Complete visibility of threats and comprehensive response tools. Become best of the best',
    cost: '$15/month'
  }
];

export default function PayCardsSection() {
  const auth = useRecoilValue(userState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('Human');

  const handleTierClick = (title) => {
    if (!auth.isAuthenticated) {
      setSelectedTier(title);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div className="payment-cards-section grid grid-cols-1 md:grid-cols-3 gap-7">
        {paymentCards.map(card => (
          <div key={card.id} className="payment-card">
            <h1 style={{ fontSize: '1.6rem' }}>{card.title}</h1>
            <span className='text-gray-400 text-sm'>{card.description}</span>
            <div style={{ paddingTop: '6px' }}>
              <button
                style={{ padding: '6px 12px', width: 'auto', cursor: 'pointer', fontWeight: '500' }}
                className='bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
                onClick={() => handleTierClick(card.title)}
              >
                {auth.isAuthenticated ? (auth.user?.plan === card.title ? 'Current Plan' : card.cost) : card.cost}
              </button>
            </div>
          </div>
        ))}
      </div>

      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTier={selectedTier}
        defaultMode="signup"
      />
    </>
  );
}
