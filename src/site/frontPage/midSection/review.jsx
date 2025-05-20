import React from "react";
import './review.css'

function Cards({review, name}){
    return(<div className="testimonial-card">
                <p>{review}</p>
                <div className="testimonial-author">{name}</div>
              </div>
          )
  }

const review= ()=>{
    return(
        <> 
             {/* testimonials */}
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Clients Say</h2>

        {/* internship-review */}
        <div className="testimonials-grid">
            <Cards review={"The HackSecure internship transformed my cybersecurity career by providing invaluable hands-on experience and expert mentorship. It deepened my practical skills, boosted my confidence, and opened new opportunities. This immersive program was a pivotal step in shaping my professional growth and passion for cybersecurity."}
             name={"Sarah J., Security Analyst"}/> 
            
            <Cards 
            review={"In just three months at HackSecure, I gained more knowledge than in a year of classes. The real-world projects pushed me to develop rapidly, enhancing my skills and problem-solving abilities. This intense, practical experience accelerated my learning and prepared me for real cybersecurity challenges."} 
            name={"Michael T., Network Security Engineer"}/>
        </div>

      </div>
            
        </>
    )
}

export default review;