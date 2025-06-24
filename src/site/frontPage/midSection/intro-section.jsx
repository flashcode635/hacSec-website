import React,{useState,useEffect} from "react";
import './intro-section.css';
import logoImage from './logo.png'; 
const sectionList=[
    {
        id:1,
        title: "Services",
        description: ["We offer a wide range of services from expert-led webinars and interactive sessions to hands-on workshops and real-world cyber investigation support." ,
          "Whether you're looking to learn, train, or secure, our services are designed to deliver impact and build resilience across every level."],
        image: "https://www.group-ib.com/wp-content/uploads/342x286.png.webp"
    },
    
    {
        id:2,
        title: "Partners",
        description: [" Partner with Hack Secure to drive innovation, share knowledge, and make a global impact in cybersecurity. From academic institutions and corporates to communities and international networks. We welcome partnerships that aim to build a safer digital world."],
        image: 'https://www.group-ib.com/wp-content/uploads/group-ib-joiners_01-1.png.webp'
    },
    
    {
        id:3,
        title: "LearnX — Cybersecurity Education, Reinvented",
        description: ["HackSecure LearnX is your gateway to real-world cybersecurity learning. Dive into expert-curated content, live sessions, CTFs, case studies, and hands-on challenges all built to sharpen your skills and fuel your growth. Whether you're a beginner or a pro, there's always more to explore."],
        image: 'https://www.group-ib.com/wp-content/uploads/342x286.png.webp'
    },
    
    {
        id:4,
        title: "Hack Secure Global",
        description: [" We’re not just a company. we’re a mission. Hack Secure Global is redefining cybersecurity through elite operations, breakthrough education, and strategic digital defense." ,
          " From investigations and cyber intelligence to talent development and global alliances. we move with purpose, lead with impact, and secure what matters.",
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
            <section
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