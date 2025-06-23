import React from 'react';
import GradientButton from '../Components/resource-btn';
import background from './front.jpg';

const Hero = () => {
  const heroStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background})`,
  };

  return (
    <div className="hero" style={heroStyle}>
      <div className="hero-content">
        <h1 className="hero-heading" style={{paddingTop: '4%'}}>
          Welcome to the Hack Secure Ecosystem
        </h1>
        <h2 className="hero-heading hero-subheading">
          Learn Secure and Lead!
        </h2>
        <p className="hero-text">
          Join a new era of cybersecurity learning, built for innovation and impact.
          Powered by HackSecure.
        </p>
        <GradientButton name="Get Started" pathname="#build-with-us" />
      </div>
    </div>
  );
};

export default Hero;
