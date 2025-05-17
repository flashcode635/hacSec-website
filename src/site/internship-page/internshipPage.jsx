import React, { useEffect } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import './internshipPage.css';
import Benefit from '../../images/internship-page/benefits/benefits.jpg'
function Card({review, name}){
  return(<div className="testimonial-card">
              <p>{review}</p>
              <div className="testimonial-author">{name}</div>
            </div>
        )
}

function BenefitCard({image,heading, description}){
  return(
    <div className="benefit-card">
            <div className="benefit-icon hands-on">
              <img src={image} />
              
            </div>
            <h3>{heading}</h3>
            <p>{description}</p>
    </div>
  )
}

const InternshipsPage = () => {
  // Animation effects when component mounts
  useEffect(() => {
    // Add animation classes after component mounts
    const title = document.querySelector('.internship-title');
    const description = document.querySelector('.internship-description');
    const benefits = document.querySelector('.benefits-container');
    const applyBtn = document.querySelector('.internship-apply-btn');

    // Add visible class with a slight delay for each element
    setTimeout(() => title?.classList.add('visible'), 100);
    setTimeout(() => description?.classList.add('visible'), 300);
    setTimeout(() => benefits?.classList.add('visible'), 500);
    setTimeout(() => applyBtn?.classList.add('visible'), 700);
  }, []);

  return (
    <div className="internship-container">
      <div className="internship-hero">
        <div className="internship-content">
          <h2 className="internship-welcome">Accelerate Your Career</h2>
          <h1 className="internship-title">Why Join HackSecure Internship Program</h1>
          
          <div className="internship-description">
            <p>
              Our internship program offers a unique opportunity to work with industry-leading 
              cybersecurity professionals. Gain hands-on experience with cutting-edge technologies
              and contribute to real-world security solutions that protect businesses and individuals.
            </p>
          </div>

          <Link to="/internship/list" className="internship-apply-btn">
            View Available Internships
          </Link>
        </div>

        <div className="internship-graphics">
          <div className="graphic-element"></div>
          <div className="graphic-element"></div>
          <div className="graphic-element"></div>
        </div>
      </div>

      {/* Benefits of joining */}
      <div className="benefits-container">
        <h2 className="benefits-title">Benefits of Our Internship Program</h2>
        
        <div className="benefits-grid">

          {/* Hands-on Experience */}

          <BenefitCard 
          image={Benefit} 
          heading ={"Hands-on Experience"} 
          description={"Work on real projects that impact our clients and contribute to our cybersecurity solutions"} />

            {/* Expert Mentorship */}

            <BenefitCard 
          image={Benefit} 
          heading ={"Expert Mentorship"} 
          description={"Learn from industry professionals with years of experience in cybersecurity"} />
        
        {/* Skill Development */}

          <BenefitCard 
          image={Benefit} 
          heading ={"Skill Development"} 
          description={"Build technical and soft skills that will make you competitive in the job market"} />

        {/* Network Building */}
          <BenefitCard 
          image={Benefit} 
          heading ={"Network Building"} 
          description={"Connect with professionals and fellow interns in the cybersecurity industry"} />

          <BenefitCard 
          image={Benefit} 
          heading ={"Certification Support"} 
          description={"Receive guidance for industry-recognized certifications to boost your resume"} />

          <BenefitCard 
          image={Benefit} 
          heading ={"Career Opportunities"} 
          description={"Top-performing interns may receive job offers to join our team full-time"} />
        </div>
      </div>

      {/* testimonials */}
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Interns Say</h2>

        {/* internship-review */}
        <div className="testimonials-grid">
            <Card review={"The HackSecure internship transformed my cybersecurity career by providing invaluable hands-on experience and expert mentorship. It deepened my practical skills, boosted my confidence, and opened new opportunities. This immersive program was a pivotal step in shaping my professional growth and passion for cybersecurity."}
             name={"Sarah J., Security Analyst"}/> 
            
            <Card 
            review={"In just three months at HackSecure, I gained more knowledge than in a year of classes. The real-world projects pushed me to develop rapidly, enhancing my skills and problem-solving abilities. This intense, practical experience accelerated my learning and prepared me for real cybersecurity challenges."} 
            name={"Michael T., Network Security Engineer"}/>
        </div>

      </div>
      
      {/* bottom section- check for internship */}
      <div className="cta-container">
        <h2>Ready to Start Your Cybersecurity Journey?</h2>
        <> 
        <Link to="/internship/list" className="cta-button">Explore Internship Opportunities</Link>
        </>
      </div>
      
    </div>
  );
};

export default InternshipsPage; 