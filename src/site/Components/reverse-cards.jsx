import React , {useState}from 'react';
import {Link, useNavigate } from 'react-router-dom'
import './reverse-card.css';
export const ClockWise= ({head,description,path, image})=>{
    const nevigate = useNavigate();
    return(
        <>
             <section id="offensive" className="component-card-deatils">
        <div className="card-component-container">
          <div className="card-component">
            <div className="card-component-content">
              <h2>{head}</h2>
              <p> {description} </p>
              <button className="card-component-cta" onClick={()=>{nevigate(path)}} >View More </button>
            </div>
            <div className="card-component-image card-image" style={{ backgroundImage: `url(${image})` }} ></div>
          </div>
        </div>
    </section>
        </>
    )
}
export const AntiClock=(head,description,path, image)=>{
    const nevigate= useNavigate();
    return(
        <>
            <section id="defensive" className="component-card-deatils alternate-bg">
                <div className="card-component-container">
                    <div className="card-component reverse">
                        <div className="card-component-content">
                            <h2>{head}</h2>
                            <p>
                               {description} 
                            </p>
                            <button className="card-component-cta" onClick={()=>{
                                 nevigate(path)
                                //  will nevigate to the the page whose route defined in the website ;strictly not for external link(outside website)
                            }}>View More</button>
                        </div>
                        <div className="card-component-image card-image" style={{ backgroundImage: `url(${image})` }} ></div>
                    </div>
                </div>
        </section>
        </>
    )
}

//  both return head,description,path and image -> now while using them wrap them in a function with alternate selection logic and attach list or db of same schema
