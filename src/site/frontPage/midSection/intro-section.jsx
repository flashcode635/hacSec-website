import React,{useState,useEffect} from "react";
import './intro-section.css';
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
        title: "Company",
        description: [" Once the usage limit is reached, Cascade can continue to be used with the Cascade Base model. To continue using premium models, upgrade your plan.",
          "Whether stationed at our mission-critical Digital Crime Resistance Centers (DCRCs) or working remotely, we wholeheartedly support your career path with a range of opportunities on an international scale.",
          "We’re a global company with the agipty and innovation potential of a startup backed by the vision and scale of an industry leader."],
        image: 'https://www.group-ib.com/wp-content/uploads/group-ib-joiners_01-1.png.webp'
     
    
    }
]
const IntroSection=()=>{
    return<>
            <div className="intro-container">
      <main className="intro-main">
        <h1 className="main-title">Build your career with us</h1>

        {sectionList.map((item)=>{
            if (item.id%2!=0) {
                
                return(
                  <section className="main-section" key={item.id} >
                <div className="section-left">
                  <h2 className="section-heading">{item.title} </h2>
                  {item.description.map((description,index)=>{
                    return(
                      <p key={index}>{description}</p>
                    )
                  })}
                  
                  <p>
                    Join a dynamic, global, and interconnected team of top cyber experts.
                  </p>
                  <p>
                    
                  </p>
                </div>
      
                <div className="section-right">
                  <img
                    src={item.image}
                    alt="3D Cybersecurity Analyst"
                    className="cyber-illustration"
                  />
                </div>
              </section>
                )
            }
            else{
                return(
                  <>
                     <section className="diverse-team-section">
    <div className="image-container">
      <img
        src={item.image}
      />
    </div>
    <div className="content-container">
        <h2>
            {item.title}
        </h2>

        <div style={{ color: "gray",fontSize: "1rem",marginBottom: "0px"}} > 
                    {item.description.map((value,index)=>{
                            return(
                                <ul style={{ color: "gray",fontSize: "1rem",marginBottom: "0px",content: "✔",listStyle: "none",padding: 0}}>
                                    <p style={{ color: "gray",fontSize: "1rem",marginBottom: "0px"}} key={index}>
                                            {value}
                                    </p> 
                                </ul>
                            )
                        })
                    }
            
            
        </div>
    </div>
        </section>

                  </>
                    
                )
            }
        })}

    
      </main>
    </div>
    </>
}

export default IntroSection