import React from 'react';
import './new.css';
import Review from './midSection/review';
import Footer from './midSection/footer';
import MidSection from './midSection/mid-section';
import background from '../../images/background.jpg';

const New = () => {
  return (
    <div className="page-container"> 
      <div className="hero-section" style={{minHeight: '100vh', width: '100%', paddingLeft: '90px'}}>
          {/* has a background image in corner  */}
          <div>  
            <img src={background} alt='background' className="background-container"/>
          </div>  
        {/* intro statement - welcome text  and tagline*/}
          <div > 
                  <div className="text-container"> 
                    {/* welcoming text */}
                      <h2 style={{fontWeight: '150', fontSize:'17px',}}>Welcome to the Future of Security</h2>
                      {/* tagline */}
                  </div>
                        <br></br>

                  <div className='tagline' > 
                  <h1>Secure Smarter Lead Stronger</h1>
                  </div>

                        <br></br>
                  <div className='description'> 
                      <h3> Unlock your potential to lead with confidence and secure what matters most. This journey empowers you with the skills to protect, influence, and inspire—equipping you to thrive in high-stakes environments and drive meaningful, lasting impact.                  
                      </h3>
                  </div>
            </div>
             <br></br>
             
                <button className='button' style={{borderRadius: "8px"}}>Get Started</button> 
          <div style={{width:'100%'}}> 
              <div className='sponsors' >
                            <br></br>       
                <div style={{ display:'flex', alignItems: 'center', justifyContent: 'center'}}>  
                          <span> sponsor 1</span>
                          <span> sponsor 2</span>
                          <span> sponsor 3</span>
                          <span> sponsor 4 </span>
                </div> 
                
              </div>
          </div>
        <br></br>
      <div style={{height:'auto', width:'100%'}}> 

                <div style={{width:'100%', left:'40%', right:'40%', marginLeft:'24%', textAlign:'center', marginBottom:'2%'}} > 
                        
                      <div style={{width:"100vw", height:"auto"}}> 
                          <div className='tagline' style={{width:'45%'}}> 
                          <h1>Train Cyber Warriors: Hack Secure's Unified Learning Platform</h1>
                      </div>

                      </div>
                              <br></br>

                        <div className='description'style={{width:'50%'}}>
                            <h3> Unlock your potential to lead with confidence and secure what matters most. This journey empowers you with the skills to protect, influence, and inspire—equipping you to thrive in high-stakes environments and drive meaningful, lasting impact.                  
                            </h3>
                        </div>
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

      {/* Footer */}
      <Footer/>
    </div>
  )
};

export default New; 