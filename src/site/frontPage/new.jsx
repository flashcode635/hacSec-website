import React from 'react';
import './new.css';
import Review from './midSection/review';
import IntroSection from './midSection/intro-section';
import Hero from './Hero';
import Sponsors from './Sponsors';
import UnifiedTrainingPlatform from './UnifiedTrainingPlatform';

const New = () => {
  return (
    <div className="front-page-container">
      <Hero />
      <Sponsors />
      <UnifiedTrainingPlatform />

      <div className="section" id="build-with-us">
        <div className="content-wrapper">
          <IntroSection />
        </div>
      </div>

      <div className="section review-section">
        <div className="content-wrapper">
          <Review />
        </div>
      </div>
    </div>
  );
};

export default New;