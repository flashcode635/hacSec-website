import React,{useState,useEffect} from "react";
import './intro-section.css';
import logoImage from './logo.png'; 
const sectionList=[
    {
        id:1,
        title: "Services",
        description: [
          // "We offer a wide range of services from expert-led webinars and interactive sessions to hands-on workshops and real-world cyber investigation support." ,
          // "Whether you're looking to learn, train, or secure, our services are designed to deliver impact and build resilience across every level."

          <span style={{color:'rgb(128, 128, 128)'}}> We offer a wide range of services from 
            <span style={{color:"white"}}><b> expert-led webinars  </b></span> 
            and 
            <span style={{color:'white'}}><b> interactive sessions </b></span>  to hands-on workshops and real-world cyber investigation support.
          </span>

          ,    // seperation between 2 spans

          <span style={{color:'rgb(128, 128, 128)'}}> Our cybersecurity driven anti-fraud and brand protection solutions are powered by   
            <span style={{color:"white"}}> intelligence-driven technologies <b></b></span>
            and the
            <span style={{color:"white"}}><b>  exceptional human proficiency </b></span>
               of our experts
          </span>
        ],
        image: "https://www.group-ib.com/wp-content/uploads/342x286.png.webp"
    },
    
    {
        id:2,
        title: "Partners",
        description: [
          // " Partner with Hack Secure to drive innovation, share knowledge, and make a global impact in cybersecurity. ",
          // "From academic institutions and corporates to communities and international networks. We welcome partnerships that aim to build a safer digital world."
          <span style={{color:'rgb(128, 128, 128)'}}>Partner with Hack Secure to drive
            <span style={{color:'white'}}><b> innovation </b></span>,
            <span style={{color:'white'}}><b> share knowledge </b></span>,
            make a global impact in cybersecurity.
          </span>
             ,    // seperation between 2 spans

          <span style={{color:'rgb(128, 128, 128)'}}>From
            <span style={{color:'white'}}><b> academic institutions </b></span> 
            and
            <span style={{color:'white'}}><b> corporates </b></span>
            to
            <span style={{color:'white'}}><b> communities </b></span> and
            <span style={{color:'white'}}><b> international networks </b></span>.We welcome partnerships that aim to build a safer digital world.
          </span>

],

        image: 'https://www.group-ib.com/wp-content/uploads/group-ib-joiners_01-1.png.webp'
    },
    
    {
        id:3,
        title: "LearnX — Cybersecurity Education, Reinvented",
        description: [
          <span style={{color:'rgb(128, 128, 128)'}} > HackSecure LearnX is your gateway to 
            <span style={{color:'white'}}><b> real-world </b></span>
             cybersecurity learning. Dive into
            <span style={{color:'white'}}><b> expert-curated </b></span>          
             
               content, live sessions, CTFs
          </span>
             ,    // seperation between 2 spans
          <span style={{color:'rgb(128, 128, 128)'}}> This includes exciting feature like
            <span style={{color:'white'}}><b> Case studies </b> </span> , and 
            <span style={{color:'white'}}><b> hands-on challenges </b></span> all built to
            <span style={{color:'white'}}><b> sharpen </b></span>          
           
            your skills and fuel your growth. Whether you are a beginner or a pro, there is always more to explore.</span>
        ],
        image: 'https://www.group-ib.com/wp-content/uploads/342x286.png.webp'
    },
    
    {
        id:4,
        title: "Hack Secure Global",
        description: [
        <span style={{color:'rgb(128, 128, 128)'}}>We offer a wide range of services from 
        <span style={{color:'white'}}> 
        <b> expert-led webinars </b> </span>
        and interactive sessions to hands-on workshops and real-world cyber investigation support.</span>
            ,    // seperation between 2 spans

        <span style={{color:'rgb(128, 128, 128)'}}>Whether you're looking to 
        <span style={{color: "white"}}> learn , train, or secure, </span>
        our services are designed to 
        <span style={{color: "white"}}> deliver impact </span>
        
         and build resilience across every level.</span>
         ],
        image: logoImage
     
    
    }
]
const IntroSection = () => {
  return (
    <div className="intro-container">
      <main className="intro-main">
        <h1 className="main-title">Build your career with us</h1>
        {sectionList.map((item, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <section style={{margin:0}}
              className={`intro-card ${isEven ? "reverse" : ""}`}
              key={item.id}
            >
              <div className="intro-card-image">
                <img
                  src={item.image}
                  className="intro-card-img"
                  alt={item.title}
                />
              </div>
              <div className="intro-card-content">
                <h2 className="intro-card-title">{item.title}</h2>
                <ul className="feature-list">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default IntroSection