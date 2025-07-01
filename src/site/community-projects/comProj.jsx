import './proj.css';
import React from 'react';
import {AntiClock,ClockWise} from '../Components/reverse-cards'; // has head,description and path and image 
export default function  CommunityProject(){
    return(
        <>
                <section className='' >
                    <div className='hero-section-proj'>
                      
                            <h1 className='w-[70%]' style={{fontSize: '4.2rem' }} >Contribute to  Projects </h1>
                            <span className='w-[70%] text-gray-300'>Join us in making a difference! Contribute your skills, ideas, or time to our community projects and help build meaningful solutions that empower, connect, and uplift those around us. Show your presence and Contribute.</span>
                        
                    </div>
                </section>
                <ClockWise 
                    head="Windows Log tool"
                    description="Annual report delves into the most critical high-tech crime trends, offering a comprehensive analysis of emerging threats, tactics, and their impact on global security"    
                    path='https://www.google.com/'       
                    image="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    
                />

                <ClockWise 
                    head="Pentesting tool-beta"
                    description="Annual report delves into the most critical high-tech crime trends, offering a comprehensive analysis of emerging threats, tactics, and their impact on global security"    
                    path='hthttps://www.google.com/'       
                    image="https://www.group-ib.com/wp-content/themes/gib-theme/assets/images/bg/wall-rocks-bg-2560-min.jpg"    
                />
                <ClockWise 
                    head="Defence tool"
                    description="Annual report delves into the most critical high-tech crime trends, offering a comprehensive analysis of emerging threats, tactics, and their impact on global security"    
                    path='https://www.google.com/'       
                    image="https://www.group-ib.com/wp-content/uploads/drp-tab-1-min.jpg.webp"    
                />
                <ClockWise 
                    head="AI Plag Check"
                    description="Annual report delves into the most critical high-tech crime trends, offering a comprehensive analysis of emerging threats, tactics, and their impact on global security"    
                    path='https://www.google.com/'       
                    image="https://www.group-ib.com/wp-content/uploads/irr-bg-1440-min.jpg"    
                />
        </>
    )
}