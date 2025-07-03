import React from 'react';
import GradientButton from '../Components/buttonWithGradient/resource-btn';
import background from './front.jpg';
import './new.css'
const Hero = () => {
  const heroStyle = {
    // background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background})`,
  };

  return (
    <div className="hero" style={heroStyle}>
      <div className="hero-content">
        <h2 className="hero-heading"  style={{fontSize:'3.4rem', fontWeight:'500', paddingTop:'4%', color:'white', marginBottom:'0', paddingBottom:'0'}}
        // style={{paddingTop: '4%'}}
        >
          Welcome to the 
        </h2>
         <h2 className="hero-heading"  style={{fontSize:'3.4rem', fontWeight:'500',  color:'white'}}
        // style={{paddingTop: '4%'}}
        >
            Hack Secure Ecosystem
        </h2>
      
        <h2 className="hero-heading hero-subheading">
          Learn Secure and Lead!
        </h2>
        <p className="hero-text" style={{paddingBottom:'20px', margin:'0',padding:'0 0 20px 0', width:'80%', fontSize:'1.2rem'}}>
          Join a new era of cybersecurity learning, built for innovation and impact.
          Powered by HackSecure.
        </p>
        {/* <GradientButton name="Get Started" pathname="#build-with-us" /> */}
      </div>
    </div>
  );
};

export default Hero;
