import React from "react";
import "./middle.css";

const Middle = () => {
  return (
    <div className="careers-container">
      <main className="careers-main">
        <h1 className="main-title">Build your career with us</h1>
        {/* section-right-image-1 */}
        <section className="main-section">
          <div className="section-left">
            <h2 className="section-heading">A global cybersecurity force</h2>
            <div className="text-base" style={{color:'gray',marginBottom: "0px"}}>

              <span>
                Our company has transformed 
                <span style={{color:'white'}}> <b> modern cybersecurity </b></span> with
                <span style={{color:'white'}}> <b> innovative technologies </b></span>
               <span>  <b>  </b> </span>
                  , designed to be the next generation of cyber defense.
              </span> 
              <br/>
              <span>
                Join a 
                <span style={{color:'white'}}> <b> dynamic </b> </span> ,
                <span style={{color:'white'}}> <b>  global </b> </span> , and 
                <span style={{color:'white'}}> <b>  interconnected </b> </span> team of top cyber experts.
              </span>
              <br/>

              <span>
                Whether stationed at our 
                <span style={{color:'white'}}> <b> mission-critical Digital Crime Resistance Centers </b> </span> 
                
                 (DCRCs) or working remotely, we wholeheartedly support your career path with a 
                <span style={{color:'white'}}> <b> range of opportunities </b> </span> on an international scale.
              </span>
            </div>

          </div>

          <div className="section-right">
            <img
              src="https://www.group-ib.com/wp-content/uploads/342x286.png.webp"
              alt="3D Cybersecurity Analyst"
              className="cyber-illustration"
            />
          </div>
        </section>

    {/* Section-Left-image- 1 */}
         <section className="diverse-team-section">
    <div className="image-container">
      <img
        src="https://www.group-ib.com/wp-content/uploads/group-ib-joiners_01-1.png.webp"
        className="cyber-img"
      />
    </div>
    <div className="content-container">
      <h2>
        A diverse team, one vision - Combating cybercrime
      </h2>
      <div style={{color:'gray',marginBottom: "0px"}} > 
        <span className="text-base">
          <span> Our team of
            <span style={{color:'white'}}><b> 400+ </b></span>  cybercrime fighters don’t have a 9 to 5 work approach,instead we work to make a
            <span style={{color:'white'}}><b> real impact </b></span>     in fighting cybercrime.
          </span>
<br/>
          <span> 
              We’re a global company with the 
            <span style={{color:'white'}}><b> agility  </b></span>and 
            <span style={{color:'white'}}><b> innovation potential </b></span> 
             of a startup backed by the vision and scale of an industry leader.
          </span>
<br/>

          <span>  We’re innovators with    
            <span style={{color:'white'}}><b> 120+ </b></span> research and produce 
            <span style={{color:'white'}}><b> unique </b></span> 
             cybersecurity insights to empower the broader community.
          </span>
<br/>

           
          <span>  We have experts from 
            <span style={{color:'white'}}><b> 30+ </b></span> countries, fluent in regional languages that offer 
            <span style={{color:'white'}}><b> on-the-go  </b></span> 
            cyber support.
          </span>
<br/>

          <span> We actively partner with            
            <span style={{color:'white'}}><b> leading universities </b></span> 
             to mentor young talent on their journey to become the leaders of tomorrow.
          </span>
<br/>

        </span>
 </div>
    </div>
        </section>

        {/* Section-right 2 */}
        <section className="main-section">
          <div className="section-left">
            <h2 className="section-heading">Make your presence known</h2>
            <div style={{color:'gray',marginBottom: "0px"}} className="text-base">

                
                
                <span>
                  What’s it like to work on an 
                   <span style={{color:'white'}}> <b> active </b> </span>
                   cyber threat? 
                </span>
                <br/>
                <span>
                    With   
                    <span style={{color:'white'}}> <b> Hack Secure </b> </span> , new joiners experience it
                    <span style={{color:'white'}}> <b>  first-hand </b> </span> .We stand out as a company immersing employees in
                    <span style={{color:'white'}}> <b> real cases </b> </span>from day one.Right from the start
                  </span>
                  <br/>
                <span>
                    Join a 
                    <span style={{color:'white'}}> <b> dynamic </b> </span> ,
                    <span style={{color:'white'}}> <b>  global </b> </span> , and 
                    <span style={{color:'white'}}> <b>  interconnected </b> </span> team of top cyber experts and elevate yourself.
                  </span>
                  <br/>
                <span>
                  Embrace 
                   <span style={{color:'white'}}> <b>  boldness </b> </span>,
                   <span style={{color:'white'}}> <b>  innovation </b> </span>, and
                   <span style={{color:'white'}}> <b>  passion </b> </span>
                 to win and work in a dynamic environment. Start your journey with Hack Secure.
                </span> 
            </div>
          </div>

          <div className="section-right">
            <img
              src="https://www.group-ib.com/wp-content/uploads/342x286.png.webp"
              alt="3D Cybersecurity Analyst"
              className="cyber-illustration"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Middle;
