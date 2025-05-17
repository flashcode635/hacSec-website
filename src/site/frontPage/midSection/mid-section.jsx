import React, { useState } from "react";
import './mid-section.css'
import Prod from './prod.png'

// Card component for displaying products/services with icon and description
function Card({photo, name, description}){
    return(
      <div className="benefit-card">
        <div style={{display:'flex'}}>
          <div>
            <img src={photo} className="benefit-icon" alt="benefit"/>
          </div>
        </div>
        <p>{description}</p>
      </div>
    )
} 

// Products section component displaying different offerings
function Products() {
    const productItems = [
        { description: 'Capture the Flag' },
        { description: 'Trainings' },
        { description: 'Internships' },
        { description: 'Workshops' }
    ];

    return(
        <div> 
            <div style={{
                width:'100vw', 
                backgroundColor: 'black', 
                color: 'white', 
                display:"flex", 
                maxHeight:'30', 
                marginBottom:'40px'
            }}>
                {productItems.map((item, index) => (
                    <div key={index} style={{
                        paddingRight:'20px', 
                        marginTop:'10px', 
                        maxHeight:'30'
                    }}>
                        <Card 
                            photo={Prod} 
                            description={item.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    ) 
}

// Services section component (to be implemented)
function Services() {
    return(
        <div className="services-section">
            <h2>Our Services</h2>
            {/* Add your services content here */}
        </div>
    ) 
}

// Solutions section component (to be implemented)
function Solutions() {
    return(
        <div className="solutions-section">
            <h2>Our Solutions</h2>
            {/* Add your solutions content here */}
        </div>
    ) 
}

// Main MidSection component with tab navigation
export default function MidSection(){
    const [select, setSelect] = useState('Products');

    return(
        <div className="mid-section-container"> 
            <div style={{
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

            {/* Conditional rendering based on selected tab */}
            {select === 'Products' && <Products />}
            {select === 'Services' && <Services />}
            {select === 'Solutions' && <Solutions />} 
        </div>
    )
}
