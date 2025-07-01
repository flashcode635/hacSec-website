import './new.css'
const Network=() =>{ 
    return(  
    <div style={{width:'90vw'}}> 
    <section id="offensive" className="event-card-deatils">
        <div className="card-event-container">
          <div className="card-event">
            <div className="card-event-content">
              <h2>Red Teamers</h2>
              <p>Our offensive security services help you identify and address vulnerabilities before they can be exploited by malicious actors.</p>
              <p>Using state-of-the-art tools and techniques employed by real attackers, our expert team simulates cyber attacks to test your defenses and provide actionable recommendations.</p>
              <button className="card-event-cta">View More </button>
            </div>
            <div className="card-event-image offensive-image"></div>
          </div>
        </div>
      </section>

      <section id="defensive" className="event-card-deatils alternate-bg">
        <div className="card-event-container">
          <div className="card-event reverse">
            <div className="card-event-content">
              <h2>Shield-blue</h2>
              <p>Build robust defenses against evolving cyber threats with our comprehensive defensive security services.</p>
              <p>From security architecture reviews to continuous monitoring, we help you implement proactive measures to detect, prevent, and respond to security incidents.</p>
              <button className="card-event-cta">View More</button>
            </div>
            <div className="card-event-image defensive-image"></div>
          </div>
        </div>
      </section>

      <section id="intelligence" className="event-card-deatils">
        <div className="card-event-container">
          <div className="card-event">
            <div className="card-event-content">
              <h2> Cyber Threat Resistance</h2>
              <p>Stay ahead of emerging threats with our actionable threat intelligence services tailored to your business needs.</p>
              <p>Our analysts monitor the threat landscape, including the dark web, to provide timely intelligence about potential threats targeting your industry or organization.</p>
              <button className="card-event-cta">View More </button>
            </div>
            <div className="card-event-image intelligence-image"></div>
          </div>
        </div>
      </section>

      <section id="training" className="event-card-deatils alternate-bg">
        <div className="card-event-container">
          <div className="card-event reverse">
            <div className="card-event-content">
              <h2>Knowledge Junction</h2>
              <p>Empower your staff with the knowledge and skills to recognize and respond to security threats effectively.</p>
              <p>Our comprehensive training programs range from basic security awareness for all employees to specialized technical training for security professionals.</p>
              <button className="card-event-cta">View More </button>
            </div>
            <div className="card-event-image training-image"></div>
          </div>
        </div>
      </section>
      </div>
      )
      }
export default Network