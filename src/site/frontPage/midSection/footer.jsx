import React from "react";
import './footer.css';
const footer= ()=>{
    return(
        <>
    <footer className="footer">
        <div className="hero" style={{marginLeft: "20px"}}> 
            <h1 className="main"> HackSecure </h1>
            <p style={{fontSize: "1.2rem", color: "#aea9a9"}}>Learn Secure Grow</p>
            <p style={{fontSize: "1.2rem", color: "#aea9a9"}}>© 2025 HackSecure. All rights reserved.</p>
        </div>
        <div style={{display: "flex", flexDirection: "row", gap: "50px", marginLeft: "7%",width: "80vw"}}> 

            <div className="footer-links"> <p>Companys</p> 
                <ul style={{listStyleType: "none", padding: 0, margin: 0, fontFamily:'Poppins', fontWeight:'lighter'}}>
                    <li>About Us</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Our Clients</li>
                    <li>Contact Us</li>
                </ul> 
            </div> 

            <div className="footer-links"> <p>Resources</p> 
                <ul style={{listStyleType: "none", padding: 0, margin: 0, fontFamily:'Poppins', fontWeight:'lighter'}}>
                    <li>Training</li>
                    <li>Certifications</li>
                    <li>Blog</li>
                    <li>Events</li>
                    <li>News</li>
                </ul> 
            </div> 

            <div className="footer-links"> <p>Partners</p> 
                <ul style={{listStyleType: "none", padding: 0, margin: 0, fontFamily:'Poppins', fontWeight:'lighter'}}>
                    <li>Partner Program</li>
                    <li>MSSP and MDR Partner Program</li>
                    <li>Technology Partners</li>
                    <li>Partner Locator</li>
                </ul> 
            </div> 

            <div className="footer-links"> <p>Support</p> 
                <ul style={{listStyleType: "none", padding: 0, margin: 0, fontFamily:'Poppins', fontWeight:'lighter'}}>
                    <li>FAQ</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                    
                </ul> 
            </div> 
            <div className="footer-links"> <p>Contact</p> 
                <ul style={{listStyleType: "none", padding: 0, margin: 0, fontFamily:'Poppins', fontWeight:'lighter'}}>
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