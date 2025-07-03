import React from 'react';
import './pay.css'; // Import the CSS file for styling
const paymentCards= [
    {
        id:1,
        title:'Human',
        description:'Replace your AV solution with superior threat detection',
        cost:'Free'
    },
    {
        id:1,
        title:'Pro',
        description:'Hunt for threats and remove risk with granular controls',
        cost:'$5/month'
    },
    {
        id:1,
        title:'Elite',
        description:'Complete visibility of threats and comprehensive response tools',
        cost:'$15/month'
    }]

export default function PayCardsSection() {
    return (
        <div className="payment-cards-section grid grid-cols-1 md:grid-cols-3 gap-7">
            {paymentCards.map(card => (
                <div key={card.id} className="payment-card">
                    <h1 style={{fontSize:'1.6rem'}}>{card.title}</h1>
                    <span className='text-gray-400 text-sm'>{card.description}</span>
                    <div className='' style={{paddingTop:'6px'}}> 
                    <button style={{padding:'3px', width:'90px', cursor:'pointer'}} className='bg-blue-500 text-white rounded'>{card.cost}</button>
                    </div>
                </div>
            ))}
        </div>
    );
}