import React,{useState} from 'react';
import './servicesPage.css';
import GradientButton from '../Components/buttonWithGradient/resource-btn';
import cardDetails from './cardDetails';
import CardStructure from './card-structure';
import Investigation from './Investigation';
import {Tick} from './Investigation';
import ServiceContactForm from './ServiceContactForm';


const Webinars = () => {
  const List = [
    "Career in Cyber Security",
    "Cyber Laws in India & Global Compliances",
    "Building the Portfolio as a Cyber Security Student",
    "Ai vs Hackers the Future of Cyber Defense",
    "Cyber Security for Startups and Small Business"
  ];

  return (
    <div>
      <CardStructure data={cardDetails[0]} />
      <div className="investigation-cards" style={{margin: '10px 5vw 0px 15vw', width:'70%', display:'flex',  alignItems:'center', }}>
        <div className="investigation-card">
          <h3 className="card-title">Check out our Webinars</h3>
          <ul className="features-list">
            {List.map((item, index) => (
              <li key={index} className="feature-item">
                <Tick />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const SessionList=[
    "Cyber Hygiene",
    "Phishing Awareness",
    "Get into Cyber Security",
    "Safe Internet Usage",
    "Cyber Security Career",
    "Women in Cyber Security"
];

const Sessions = () => {
    return (
        <div>
            <CardStructure data={cardDetails[1]}/>
            <div className="investigation-cards" style={{margin: '10px 5vw 0px 15vw', width:'70%', display:'flex',  alignItems:'center', }}>
        <div className="investigation-card">
          <h3 className="card-title">Check out our insightful sessions</h3>
          <ul className="features-list">
            {SessionList.map((item, index) => (
              <li key={index} className="feature-item">
                <Tick />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
        </div>
    )
}
const Workshop = () => {
  const topics=[
    { id:1,
      name: "RED TEAM",
      list:["Intro to EH & Kali Linux",
      "OWSAP TOP 10",
      "Network & Wireshark Basics",
      "Vulnerable Assessment ( ctf )",
      "Social Engerring Tacties"]
    },
    { id:2,
      name: "BLUE TEAM",
      list:["Digital Forencis & Incident Response",
        "SIEN Tools & LOG ANALYSIS",
        "Incider Threat Hunting",
        "Malware Analysis",
        "Defensive Strategies in SOC",
        "Cyber Security in Cloud"
        ]
    },{ id:3,
      name:"OTHER TOPICS",
      list:["IoT Security",
        "Blockchain",
        "AI in Cyber Security"
        ]
    }
]
    return (
        <div>
            <CardStructure data={cardDetails[2]}/>
                      <div className="investigation-cards" style={{gap:'30px', marginLeft:'2vw', marginRight:'2vw'}}>
                       {topics.map((card) => (
                           <div key={card.id} className="investigation-card" style={{ width:'auto',  alignItems:'center' }}>
                               <h3 className="card-title">{card.name}</h3>
                               <ul className="features-list">
                                   {card.list.map((feature, index) => (
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
       
    )
}
const ServicesPage = () => {
  const [service ,setService]=useState('Webinars');
  // cards layout
  const Gridcards=({data})=>{
    console.log(data.title);
    console.log(data.id);
  return(
    <>
    {data.map((data) => (
      <div className="service-card" key={data.id}>
        {/* <div className="service-icon">
          <img src={data.icon} />
        </div> */}
         <button onClick={()=>setService(data.title)} style={{textDecoration: 'none', backgroundColor: 'transparent', color: 'white', border: 'none' ,cursor: 'pointer'}}> <h3> {data.title}</h3></button>
        {/* <ul className="service-features">
          {data.features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> */}
        {/* <a href={data.link} className="service-link">Learn More →</a> */}
      </div>
    ))}
    </>
  )
}

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1> Services</h1>
          <p style={{fontFamily:'system-ui'}}>HackSecure: Your First Line of Cyber</p>
          <GradientButton name="Request a Consultation" />
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview" >
          <h2 className="section-title">Your Shield in a Connected World</h2>
          <p className="section-subtitle">
            From expert-led training to real-time investigations, everything we do is designed to make your digital environment smarter, safer, and stronger.
          </p>
        
        <div className="services-container">
          {/* Services Grid */}
          <div className='services-grid md:grid md:grid-cols-4'>
            
            <Gridcards data={cardDetails} /> 
            <div className=''> 
            <Gridcards data={[{ id:4, title: "Cyber Investigation", description: "", topics: [] }]} />
            </div>
          </div>
        </div>
      </section>

      <div style={{marginBottom:'40px'}}> 
{service === 'Cyber Investigation' && <Investigation />}
        {service === 'Webinars' && <Webinars />}
        {service === 'Sessions' && <Sessions />}
        {service === 'Workshop' && <Workshop />}
        
      </div>

      {/* CTA Section */}
      <ServiceContactForm sessionTopics={SessionList} />
    </div>
  );
};

export default ServicesPage; 