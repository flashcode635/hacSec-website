import React from "react";
import "./middle.css";

const Middle = () => {
  return (
    <div className="careers-container">
      <main className="careers-main">
        <h1 className="main-title">Build your career with us</h1>
        <section className="main-section">
          <div className="section-left">
            <h2 className="section-heading">A global cybersecurity force</h2>
            <p>
              Our company has transformed modern cybersecurity with innovative technologies, designed to be the next generation of cyber defense.
            </p>
            <p>
              Join a dynamic, global, and interconnected team of top cyber experts.
            </p>
            <p>
              Whether stationed at our mission-critical Digital Crime Resistance Centers (DCRCs) or working remotely, we wholeheartedly support your career path with a range of opportunities on an international scale.
            </p>
          </div>

          <div className="section-right">
            <img
              src="https://www.group-ib.com/wp-content/uploads/342x286.png.webp"
              alt="3D Cybersecurity Analyst"
              className="cyber-illustration"
            />
          </div>
        </section>
    {/* Section-Left 1 */}
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
      <div style={{ color: "gray",fontSize: "1rem",marginBottom: "0px"}} > 
      <p style={{ color: "gray",fontSize: "1rem",marginBottom: "0px"}}>
        Our team of 400+ cybercrime fighters don’t have a 9 to 5 work approach, instead we work to make a real impact in fighting cybercrime.
      </p>
      <ul style={{ color: "gray",fontSize: "1rem",marginBottom: "0px",content: "✔",listStyle: "none",
  padding: 0}}>
        <li>
          We’re a global company with the agility and innovation potential of a startup backed by the vision and scale of an industry leader.
        </li>
        <li>
          We’re innovators with 120+ technology patents, and consistently research and produce unique cybersecurity insights to empower the broader community in investigating, preventing, and fighting cybercrime.
        </li>
        <li>
          We have experts from 30+ countries, fluent in regional languages that offer on-the-go cyber support.
        </li>
        <li>
          We actively partner with leading universities to mentor young talent on their journey to become the leaders of tomorrow.
        </li>
      </ul> </div>
    </div>
        </section>

        {/* Section-right 2 */}
        <section className="main-section">
          <div className="section-left">
            <h2 className="section-heading">Make your presence known</h2>
            <p style={{ color: "gray",fontSize: "1rem", marginBottom: "0px"}}>
              What’s it like to work on an active cyber threat? With Group-IB, new joiners experience it first-hand. We stand out as a company immersing employees in real cases from day one. 
            </p>
            <p style={{ color: "gray",fontSize: "1rem",marginBottom: "0px"}}>
              Embrace boldness, innovation, and passion to win and work in a dynamic environment. Start your journey with Hack Secure.
            </p> 
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
