import React from 'react';
import './new.css';
import background from '../../images/background.jpg';
const New = () => {
  return (
    <div style={{height: '100vh', width: '100%', paddingLeft: '90px', }}>
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
              
        <div className='sponsors' >
          <center>  <span> sponsor 1</span>
            <span> sponsor 2</span>
            <span> sponsor 3</span>
          </center>
           
        </div>
        <br></br>
        {/* <div className='tagline' style={{ height:'100px', width:'60%', left:'40%', right:'40%', marginLeft:'20%', marginRight:'20%',textAlign:'center', marginBottom:'3%'}}>
          <h1>Empowering people through Hack Secure's Unified Learning Platform</h1>
        </div>
        <br></br> */}
        {/* <div className='description' style={{marginLeft:'10%', marginRight:'10%', textAlign:'center'}}> </div> */}

        <div style={{ height:'100px', width:'100%', left:'40%', right:'40%', marginLeft:'20%', marginRight:'20%',textAlign:'center', marginBottom:'2%'}} > 
                <br></br>
          <div className='tagline' style={{width:'50%'}}> 
          <h1>Train Cyber Warriors: Hack Secure's Unified Learning Platform</h1>
          </div>
                <br></br>
          <div className='description'style={{width:'50%'}}>
              <h3> Unlock your potential to lead with confidence and secure what matters most. This journey empowers you with the skills to protect, influence, and inspire—equipping you to thrive in high-stakes environments and drive meaningful, lasting impact.                  
              </h3>
          </div>
        </div>
    </div>
  )
};

export default New; 