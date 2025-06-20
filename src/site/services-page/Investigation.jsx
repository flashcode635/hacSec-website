import React from "react";
import "./servicesPage.css";

export const Tick = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
            <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#055ba6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

const Investigation = () => {
    const cardInfo = [
        {
            id: 1,
            title: "Financial Crimes",
            features: [
                "Extortion",
                "Black Mailing",
                "Defamation",
                "Harassment",
                "Identity Theft"
            ]
        },
        {
            id: 2,
            title: "Data Theft",
            features: [
                "Phishing and Credentials Theft",
                "Data Leaks",
                "Insider Threats",
                "Competitive Espionage",
                "Account Takeover"
            ]
        },
        {
            id: 3,
            title: "Reputational Damage",
            features: [
                "Cryptocurrency Theft",
                "Banking Fraud",
                "Attacks on ATMs",
                "Business Email Compromise",
                "Attacks on Card Processing Systems",
                "Attacks on SWIFT, payment gateways"
            ]
        }
    ];

    return (
        <div className="investigation-container">
            <h2 className="section-title">Cyber Investigation</h2>
            <p className="section-subtitle">
                Investigate and respond to digital incidents that impact your organization's
                finances, data integrity, and reputation through structured intelligence-led analysis.
            </p>
            <div className="investigation-cards" style={{gap:'30px', marginLeft:'2vw', marginRight:'2vw'}}>
                {cardInfo.map((card) => (
                    <div key={card.id} className="investigation-card">
                        <h3 className="card-title">{card.title}</h3>
                        <ul className="features-list">
                            {card.features.map((feature, index) => (
                                <li key={index} className="feature-item">
                                    <Tick />
                                    <span>{feature}</span>
                                    
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Investigation;