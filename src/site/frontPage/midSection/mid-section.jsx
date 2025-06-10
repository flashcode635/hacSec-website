import React, { useState } from "react";
import './mid-section.css'
import Prod from './prod.png'

// Products section component displaying different offerings
function Products() {
    const productItems = [
        { description: 'Capture the Flag' },
        { description: 'Trainings' },
        { description: 'Internships' },
        { description: 'Workshops' }
    ];

    return(
        <div className="section-content solutions-section">
            <div className="solutions-header">
                <h2 className="solutions-title">Our Products</h2>
                <p className="solutions-subtitle">Advanced cybersecurity products for comprehensive protection</p>
            </div>
            
            <div className="solutions-grid">
                {productItems.map((item, index) => (
                    <div key={index} className="solution-card-wrapper">
                        <div className="solution-card">
                            <div className="solution-icon-container">
                                <img src={Prod} className="solution-icon" alt="solution icon" />
                            </div>
                            <h3 className="solution-name">{item.description}</h3>
                            <p className="solution-description">{item.details}</p>
                            <button className="solution-learn-more">Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ) 
}

// Services section component (to be implemented)
function Services() {
    const serviceItems = [
        { 
            description: 'Penetration Testing',
            details: 'Comprehensive security assessments to identify vulnerabilities in your systems before attackers do.'
        },
        { 
            description: 'Security Consulting',
            details: 'Expert guidance on implementing robust security strategies tailored to your organization.'
        },
        { 
            description: 'Incident Response',
            details: 'Rapid and effective response to security breaches to minimize damage and recovery time.'
        },
        { 
            description: 'Security Training',
            details: 'Customized training programs to educate your team on security best practices.'
        }
    ];

    return(
        <div className="section-content solutions-section">
            <div className="solutions-header">
                <h2 className="solutions-title">Our Services</h2>
                <p className="solutions-subtitle">Advanced cybersecurity products for comprehensive protection</p>
            </div>
            
            <div className="solutions-grid">
                {serviceItems.map((item, index) => (
                    <div key={index} className="solution-card-wrapper">
                        <div className="solution-card">
                            <div className="solution-icon-container">
                                <img src={Prod} className="solution-icon" alt="solution icon" />
                            </div>
                            <h3 className="solution-name">{item.description}</h3>
                            <p className="solution-description">{item.details}</p>
                            <button className="solution-learn-more">Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ) 
}

// Solutions section component (to be implemented)
function Solutions() {
    const solutionItems = [
        { 
            description: 'Endpoint Protection',
            details: 'Advanced endpoint security solutions that detect and block threats in real-time to protect your devices.'
        },
        { 
            description: 'Cloud Security',
            details: 'Comprehensive cloud security architecture to protect your data and applications in any cloud environment.'
        },
        { 
            description: 'Network Defense',
            details: 'Multi-layered network security solutions to monitor, detect, and prevent unauthorized access and attacks.'
        },
        { 
            description: 'Threat Intelligence',
            details: 'Real-time threat intelligence platform to stay ahead of emerging threats and vulnerabilities.'
        }
    ];

    return(
        <div className="section-content solutions-section">
            <div className="solutions-header">
                <h2 className="solutions-title">Our Solutions</h2>
                <p className="solutions-subtitle">Advanced cybersecurity products for comprehensive protection</p>
            </div>
            
            <div className="solutions-grid">
                {solutionItems.map((item, index) => (
                    <div key={index} className="solution-card-wrapper">
                        <div className="solution-card">
                            <div className="solution-icon-container">
                                <img src={Prod} className="solution-icon" alt="solution icon" />
                            </div>
                            <h3 className="solution-name">{item.description}</h3>
                            <p className="solution-description">{item.details}</p>
                            <button className="solution-learn-more">Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ) 
}

// Main MidSection component with tab navigation
export default function MidSection(){
    const [select, setSelect] = useState('Products');

    return(
        <div className="mid-section-container"> 
            <div style={{
                marginLeft:'50px',
                display: 'flex',
                justifyContent: 'center', 
                alignItems: 'center'
            }}>
                <button className="mid" onClick={() => setSelect('Products')}>
                    Products
                </button>
                <button className="mid" onClick={() => setSelect('Services')}>
                    Services
                </button>
                <button className="mid" onClick={() => setSelect('Solutions')}>
                    Solutions
                </button>
            </div>

            <div className="mid-section-content-wrapper">
                {/* Conditional rendering based on selected tab */}
                {select === 'Products' && <Products />}
                {select === 'Services' && <Services />}
                {select === 'Solutions' && <Solutions />} 
            </div>
        </div>
    )
}
