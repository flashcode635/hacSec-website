import React from "react";
import SocialLinks from "./social";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './footer.css';
const footer= ()=>{
    return(
        <>
    <footer className="footer">
        <div className="hero" style={{marginLeft: "20px"}}> 
            <h1 className="main"> Hack Secure </h1>
            <p style={{fontSize: "1.2rem", color: "white",marginBottom:'16px'}}>Learn Secure Lead</p>
           <SocialLinks />
            <p style={{fontSize: "1.1rem", color: "#aea9a9", marginTop: "10px",fontFamily:'Poppins', fontWeight:'lighter'}}>© 2025 HackSecure. All rights reserved.</p>
        </div>
        <div style={{display: "flex", flexDirection: "row", gap: "50px", marginLeft: "5%",width: "80vw"}}> 

            <div className="footer-links"> <p>Companys</p> 
                <ul style={{listStyleType: "none", padding: 0,marginTop:'12px' ,fontFamily:'Poppins', fontWeight:'lighter'}}>
                    <li>About Us</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Our Clients</li>
                    <li>Contact Us</li>
                </ul> 
            </div> 

            <div className="footer-links"> <p>Resources</p> 
                <ul style={{listStyleType: "none", padding: 0, marginTop:'12px',fontFamily:'Poppins', fontWeight:'lighter'}}>
                    <li>Training</li>
                    <li>Certifications</li>
                    <li>Blogs</li>
                    <li>Events</li>
                    <li>News</li>
                </ul> 
            </div> 

            <div className="footer-links"> <p>Partners</p> 
                <ul style={{listStyleType: "none", padding: 0,marginTop:'12px', fontFamily:'Poppins', fontWeight:'lighter'}}>
                    <li>Partner Program</li>
                    <li>MSSP and MDR Partner Program</li>
                    <li>Technology Partners</li>
                    <li>Partner Locator</li>
                </ul> 
            </div> 

            <div className="footer-links"> <p>Support</p> 
                <ul style={{listStyleType: "none", padding: 0,marginTop:'12px', fontFamily:'Poppins', fontWeight:'lighter'}}>
                    <li>FAQ Section</li>
                    <li>Terms Conditions</li>
                    <li>Privacy Policy</li>
                    
                </ul> 
            </div> 
            <div className="footer-links"> <p>Contact</p> 
                <ul style={{listStyleType: "none", padding: 0,marginTop:'12px', fontFamily:'Poppins', fontWeight:'lighter'}}>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>Partners</li>
                    <li>Support</li>
                    <li>Contact</li>
                </ul> 
            </div> 
        </div>
        
    </footer> 
        </>
    )
}
 export default footer;