import React from 'react';
import './new.css';
import Review from './midSection/review';
import Footer from './midSection/footer';
import MidSection from './midSection/mid-section';
import background from '../../images/background.jpg';

const New = () => {
  return (
    <> 
    <div style={{ minHeight: 'auto', width: '100vw' }}>
        <div className="hero-container">
          <div className="text-container">
            {/* wrapper div :-          */}
            <div style={{textAlign:'left', paddingLeft:'2%'}}> 
            <h2 className="welcome-text">Welcome to the Future of Security</h2>

            <div className="tagline">
              <h1>Secure Smarter Lead Stronger</h1>
            </div>

            <div className="description">
              <h3>
                Unlock your potential to lead with confidence and secure what matters most.
                This journey empowers you with the skills to protect, influence, and inspire—
                equipping you to thrive in high-stakes environments and drive meaningful,
                lasting impact.
              </h3>
            </div>
        <button className="button">
                  <div className="blob1"></div>
                  <div class="blob2"></div>
                  <div className="inner">Get Started</div>
        </button> 
          </div>
        

        </div>
        
        </div>
         
        <div className='sponsors' >      
            <div style={{ display:'flex', alignItems: 'center', justifyContent: 'center'}}>  
                    <span> sponsor 1</span>
                    <span> sponsor 2</span>
                    <span> sponsor 3</span>
                    <span> sponsor 4 </span>
            </div> 
            
        </div>
    </div>

    <div style={{ height:'auto',width:'100vw'}}> 
        <div style={{height:'auto', width:'100%'}}> 

                <div  style={{width:'100%',  alignItems: 'center', justifyContent: 'center', textAlign:'center', marginBottom:'2%'}} > 
                        
                      <span  style={{ height:"auto"}}> 
                          <span className='tagline' style={{width:'45%'}}> 
                                <h1>Train Cyber Warriors: Hack Secure's Unified Learning Platform

                                </h1>
                          </span>

                      </span>
                              <br></br>

                      <span className='description'style={{width:'50%'}}>
                          <h3> Unlock your potential to lead with confidence and secure what matters most. This journey empowers you with the skills to protect, influence, and inspire—equipping you to thrive in high-stakes environments and drive meaningful, lasting impact.                  
                          </h3>
                      </span>
                </div>
        </div>
    </div>
         {/* Middle section with tabs */}
              <div className="mid-section-container-wrapper">
                <MidSection/>  
              </div>
        
         {/* Review section */}
      <div className="review-section-wrapper"> 
        <Review/>     
      </div>

    </>
  )
};

export default New; 