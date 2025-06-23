import React from "react";
import SocialLinks from "./social";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './footer.css';

const Footer= ()=>{
    return(
        <>
    <footer className="footer" >
<div  className='sm:flex sm:flex-row flex-col' style={{ gap: "20px", width: "100vw", alighnItems: "center", justifyContent: "space-between", padding: "20px 50px", color: "white"}} >

        <div className="footer-hero" style={{marginLeft: "2px"}}> 

            <p className="main"> Hack Secure 

            </p>

            <p className="footer-moto" style={{fontSize: "1.2rem",fontWeight: "lighter", color: "white",marginBottom:'16px'}}>
                Learn Secure Lead
                </p>

                {/* <div style={{height: '175px', width: '280px'}}>
                    <div id="picture"></div>
                </div> */}

            <p style={{fontSize: "1.0rem", color: "#aea9a9", marginTop: "10px",fontFamily:'Sans-Serif', fontWeight:'lighter'}}> © 2025 HackSecure. All rights reserved.</p>
        </div> 
 
        

                    {/* company */}
            <div className="footer-links"> <p style={{color:"white",fontWeight:'lighter'}}>Company</p> 
                <ul style={{listStyleType: "none", padding: 0,marginTop:'12px' ,fontFamily:'Sans-Serif', fontWeight:'lighter',fontSize:'0.8rem'}}>
                    <li>About Us</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Media Center</li>
                    <li>Contact Us</li>
                </ul> 
            </div> 
         
         
                        {/* Resources */}
            <div className="footer-links"> <p style={{color:"white",fontWeight:'lighter'}}>Resources</p> 
                <ul style={{listStyleType: "none", padding: 0, marginTop:'12px',fontFamily:'Sans-Serif', fontWeight:'lighter',fontSize:'0.8rem'}}>
                    <li>Training</li>
                    <li>Certifications</li>
                    <li>Blogs</li>
                    <li>Events</li>
                    <li>News</li>
                </ul> 
            </div> 
        

         
                        {/* Partners */}
            {/* <div className="footer-links"> <p>Partners</p> 
                <ul style={{listStyleType: "none", padding: 0,marginTop:'12px', fontFamily:'Sans-Serif', fontWeight:'lighter',fontSize:'0.8rem'}}>
                    <li>Partner Program</li>
                    <li>MSSP and MDR Partner Program</li>
                    <li>Technology Partners</li>
                </ul> 
            </div> 
             */}

         
                        {/* Legal */}
            <div className="footer-links"> <p style={{color:"white",fontWeight:'lighter'}}>Legal Compliance</p> 
                <ul style={{listStyleType: "none", padding: 0,marginTop:'12px', fontFamily:'Sans-Serif', fontWeight:'lighter',fontSize:'0.8rem'}}>
                    
                    <li>Data Privacy Framework</li>
                    <li>Terms & Conditions</li>
                    
                    <li>Privacy Policy</li>
                    
                </ul> 
            </div> 
            {/* support */}
            <div className="footer-links"> <p style={{color:"white",fontWeight:'lighter'}}>Support </p> 
                <ul style={{listStyleType: "none", padding: 0,marginTop:'12px', fontFamily:'Sans-Serif', fontWeight:'lighter',fontSize:'0.8rem'}}>
                    <li>FAQ Section</li>
                    
                    <li>Organization</li>
                    <li>Headquarters & Branches</li>
                    
                    
                </ul> 
            </div> 

         
                        {/* Contact */}
            {/* <div className="footer-links"> <p>Contact</p> 
                <ul style={{listStyleType: "none", padding: 0,marginTop:'12px', fontFamily:'Sans-Serif', fontWeight:'lighter',fontSize:'0.8rem'}}>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>Partners</li>
                    <li>Support</li>
                    <li>Contact</li>
                </ul> 
            </div>  */}
            
</div>
            
    </footer> 
    {/* contact  */}
    <div  style={{width:'100vw', paddingLeft:'45px',paddingTop:'14px',marginBottom:'9vh'}}>
        <div style={{fontFamily:'Sans-Serif',color:'white'}}>Contact</div>
        <div > 
            <SocialLinks />
        </div>
    </div>
        </>
    )
}
 export default Footer;