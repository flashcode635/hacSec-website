import React,{useState,useEffect} from "react";
import './intro-section.css';
import logoImage from './logo.png'; 
const sectionList=[
    {
        id:1,
        title: "Services",
        description: [" Once the usage limit is reached, Cascade can continue to be used with the Cascade Base model. To continue using premium models, upgrade your plan.",
          "Whether stationed at our mission-critical Digital Crime Resistance Centers (DCRCs) or working remotely, we wholeheartedly support your career path with a range of opportunities on an international scale."],
        image: "https://www.group-ib.com/wp-content/uploads/342x286.png.webp"
    },
    
    {
        id:2,
        title: "Partners",
        description: [" Once the usage limit is reached, Cascade can continue to be used with the Cascade Base model. To continue using premium models, upgrade your plan.",
          "Whether stationed at our mission-critical Digital Crime Resistance Centers (DCRCs) or working remotely, we wholeheartedly support your career path with a range of opportunities on an international scale."],
        image: 'https://www.group-ib.com/wp-content/uploads/group-ib-joiners_01-1.png.webp'
    },
    
    {
        id:3,
        title: "LearnX ",
        description: [" Once the usage limit is reached, Cascade can continue to be used with the Cascade Base model. To continue using premium models, upgrade your plan.",
          "Whether stationed at our mission-critical Digital Crime Resistance Centers (DCRCs) or working remotely, we wholeheartedly support your career path with a range of opportunities on an international scale.",
          "We’re a global company with the agipty and innovation potential of a startup backed by the vision and scale of an industry leader."],
        image: 'https://www.group-ib.com/wp-content/uploads/342x286.png.webp'
    },
    
    {
        id:4,
        title: "Hack Secure Global",
        description: [" Once the usage limit is reached, Cascade can continue to be used with the Cascade Base model. To continue using premium models, upgrade your plan.",
          "Whether stationed at our mission-critical Digital Crime Resistance Centers (DCRCs) or working remotely, we wholeheartedly support your career path with a range of opportunities on an international scale.",
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