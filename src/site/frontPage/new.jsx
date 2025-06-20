import React from 'react';
import './new.css';
import Review from './midSection/review';
import Footer from './midSection/footer';
import MidSection from './midSection/mid-section';
import background from './front.jpg';
import GradientButton from '../Components/resource-btn';
import IntroSection from './midSection/intro-section';

const New = () => {
  // Common styles
  const containerStyle = {
    width: '100vw',
    maxWidth: '100%',
    overflowX: 'hidden',
    padding: '2rem 0',
  };

  const sectionStyle = {
    width: '100%',
    padding: '4rem 2rem',
    boxSizing: 'border-box',
  };

  const contentWrapper = {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    background: 'rgba(2 6 23 / 19%)',
  };

  const headingStyle = {
    fontSize: 'clamp(1.5rem, 5vw, 2.7rem)',
    fontWeight: 700,
    marginBottom: '1.5rem',
    lineHeight: '1.2',
    color: '#fff',
  };

  const subHeadingStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    fontWeight: 400,
    marginBottom: '2rem',
    lineHeight: '1.6',
    color: 'rgba(255, 255, 255, 0.9)',
    maxWidth: '800px',
  };

  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <div  style={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 2rem',
      }}>
        <div style={{
          ...contentWrapper,
          zIndex: 1,
          padding: '2rem 0',
        }}>
          <h1 style={{...headingStyle, width: '70%'}}>
            Welcome to the Hack Secure Ecosystem
          </h1>
          <h2 style={{
            ...headingStyle,
            fontSize: 'clamp(1.3rem, 3vw, 2.0rem)',
            margin: '1rem 0 2rem',
            
          }}>
            Learn Secure and Lead!
          </h2>
          <p style={subHeadingStyle}>
            Join a new era of cybersecurity learning, built for innovation and impact.
            Powered by HackSecure.
          </p>
          {/* <button style={{
            padding: '0.8rem 2rem',
            fontSize: '1.1rem',
            fontWeight: 600,
            color: '#fff',
            background: 'linear-gradient(90deg,rgb(6, 1, 78),rgb(52, 108, 199))',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
            zIndex: 1,
          }}>
            Get Started
          </button> */}
          <GradientButton name="Get Started" pathname="#build-with-us"/>
        </div>
      </div>

      {/* Sponsors Section */}
      <div style={{
        ...sectionStyle,
        background: 'rgba(2 6 23 / 19%)',
        padding: '2rem 1rem',
      }}>
        <div style={{
          ...contentWrapper,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
        }}>
          {[1, 2, 3, 4].map((sponsor) => (
            <div key={sponsor} style={{
              padding: '1rem 2rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              color: '#94a3b8',
              fontWeight: 500,
            }}>
              Sponsor {sponsor}
            </div>
          ))}
        </div>
      </div>

      {/* Unified Training Platform Section */}
      <div style={{
        ...sectionStyle,
        background: 'rgba(2 6 23 / 19%)',
        textAlign: 'center',
      }}>
        <div style={{
          ...contentWrapper,
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          <h2 style={{
            ...headingStyle,
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            marginBottom: '1.5rem',
            color: '#0955d9',
          }}>
            Hack Secure's Unified Training Platform
          </h2>
          <p style={{
            ...subHeadingStyle,
            margin: '0 auto 3rem',
            maxWidth: '800px',
          }}>
            Unlock your potential to lead with confidence and secure what matters most. 
            This journey empowers you with the skills to protect, influence, and inspire—
            equipping you to thrive in high-stakes environments and drive meaningful, lasting impact.
          </p>
        </div>
      </div>

      {/* Mid Section */}
      <div style={{
        ...sectionStyle,
        background: 'rgba(2 6 23 / 19%)',
      }}>
        <div style={contentWrapper} id='build-with-us'>
          <IntroSection />
        </div>
      </div>

      {/* Review Section */}
      <div style={{
        ...sectionStyle,
        background: 'rgb(2 6 23 / 19%)',
      }}>
        <div  style={contentWrapper}>
          {/*   */}
          <Review />
        </div>
      </div>
    </div>
  );
};

export default New;