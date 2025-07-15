import React,{useState} from 'react';
import './servicesPage.css';
import GradientButton from '../Components/buttonWithGradient/resource-btn';
import cardDetails from './cardDetails';
import CardStructure from './card-structure';
import Investigation from './Investigation';
import {Tick} from './Investigation';
import ServiceContactForm from './ServiceContactForm';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
    {
      id:1,
      
      item: "Phishing Awareness",
    },
    {
      id:2,
      item: "Get into Cyber Security",
    },
    {
      id:3,
      item: "Women in Cyber Security"
    },
    {
      id:4,
      item:  "Cyber Security Career",
    },
    {
      id:5,
      item:  "Safe Internet Usage",
    },
    {
      id:6,
      item:"Cyber Hygiene",
    },
         
  ];
export  const ServiceForm=()=>{
  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const el = document.getElementById(location.hash.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}, [location]);
  
return(
  <>
     {/* CTA Section */}
      <ServiceContactForm sessionTopics={SessionList} />
  </>
)
}

const Sessions = () => {
  const SessionLists=[
    {
      id:1,
      
      item: "Phishing Awareness",
    },
    {
      id:2,
      item: "Get into Cyber Security",
    },
    {
      id:3,
      item: "Women in Cyber Security"
    },
    {
      id:4,
      item:  "Cyber Security Career",
    },
    {
      id:5,
      item:  "Safe Internet Usage",
    },
    {
      id:6,
      item:"Cyber Hygiene",
    },
         
  ];
    return (
        <div>
            <CardStructure data={cardDetails[1]}/>
            <div className="investigation-cards" style={{margin: '10px 5vw 0px 15vw', width:'70%', display:'flex',  alignItems:'center', }}>
        <div className="investigation-card">
          <h3 className="card-title">Check out our insightful sessions</h3>
          <ul className="features-list">
            {SessionLists.map((data) => (
              <li key={data.id} className="feature-item">
                <Tick />
                <span>{data.item}</span>
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
  const nevigate = useNavigate()
  const [service ,setService]=useState('Webinars');
  // cards layout
    const Gridcards=({data})=>{
      // console.log(data.title);
      // console.log(data.id);
    return(
      <>
      {data.map((data) => (
        <div className="service-card w-[50%] h-[190px]" key={data.id} style={{ display:'flex', justifyContent:'center', alignItems:'center',margin:'20px 0'}}>
          <button onClick={()=>setService(data.title)} className='' style={{textDecoration: 'none', backgroundColor: 'transparent', color: 'white', border: 'none' ,cursor: 'pointer', alignContent:'center'}}>
            <div className='w-[70px]'> 
            <img src={data.icon} className=' h-[170px]' style={{marginLeft:'14px', paddingBottom:'50px', justifyContent:'center'}}/> </div>
            <h3> {data.title}</h3>
            </button>
        </div>
      ))}
      </>
    )
  }

    const sectiontwo=[
      {
        id:1,
        title:"Tailored security services",
        description:'Experts understand the ins and outs of security challenges and offer bespoke cybersecurity services such as detailed guides, security roadmaps, and risk prioritization measures, each tailored to the organization’s specific needs.',
        image:'https://www.group-ib.com/wp-content/uploads/demo-1-2.png.webp'
      },
      {
        id:2,
        title:"Technology creators and enablers",
        description:'As a trusted partner, organizations have access to a cohesive ecosystem of expertise, technologies, and services, which allows them to future-proof their operations and upgrade their cybersecurity posture',
        image:'https://www.group-ib.com/wp-content/uploads/demo-2-2.png.webp'
      },
      {
        title:"Globally distributed expertise",
        id:3,
        description:'Hack-Sec works in synergy with innovative technologies to offer detection and response capabilities that eliminate cyber disruptions efficiently and effectively. We map and mitigate adversary tactics in each region through targeted intelligence and operations',
        image:'https://www.group-ib.com/wp-content/uploads/demo-16.png.webp'
      }]
  // return section of Service-page
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h2 className='h1-tag' style={{fontSize:'1.0rem', marginBottom:'0'}}> Hack-Sec Cybersecurity Services </h2>
          <h1 style={{fontSize:'3.4rem'}}> Powerful symbiosis of technology
and expertise for complete protection
against cyber risks </h1>

          <span style={{fontFamily:'system-ui',color:'gray',}} className='text-base'>Take off where most of the Incident Response readiness starts and make sure your business is enabled to face the trickiest  of all the attacks and incidents</span>
          <div style={{ display:'flex',justifyContent:'center', marginTop:'20px'}}> 
            <GradientButton name="Request a Consultation" />
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview" >
        <div style={{ paddingLeft:'30px', width:'100vw',display:'flex',justifyContent:'center', textAlign:'center',}}> 
          <h3 className="section-title" style={{fontSize:'2.6rem', width:'60%'}}>Gain a formidable partner to build exceptional defenses</h3>
          </div>
          <p className="section-subtitle" style={{paddingTop:'0',fontSize:'16px'}}>
            From expert-led training to real-time investigations, everything we do is designed to make your digital environment smarter, safer, and stronger prevent shrinking on medium screens and larger.
          </p>

        
        <div className="services-container">

          {/* section2:- has some additional elements added */}
          <section className='section-2'>
            <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6'>
              {sectiontwo.map((data)=>(
                 <div key={data.id}>
                  <div className='flex justify-center w-full' style={{width:'100%'}}> 
                <img className='w-[170px] h-[170px]' src={data.image}  /> 
                </div>
                {/* <div> </div> */}
                <div className='text-center h-[60px] text-lg'>{data.title}</div>
                <div className='text-gray-400 text-center  text-sm'> {data.description}</div>
                </div>
              ))}
             
              {/* <div><img className='w-[70px] h-[70px]' src="https://www.group-ib.com/wp-content/uploads/demo-1-2.png.webp" alt="" srcset="" />
              <span> </span>
              </div>
              <div><img className='w-[70px] h-[70px]' src="https://www.group-ib.com/wp-content/uploads/demo-2-2.png.webp" alt="" srcset="" />
              <span> </span>
              </div> */}
            </div>
          </section>

{/* section -3 */}
                  <div style={{ padding:'70px 30px 0px 0', width:'90vw',display:'flex',justifyContent:'center', textAlign:'center',}}> 
          <h3 className="section-title" style={{fontSize:'2.6rem', width:'70%', textAlign:'center'}}>Place comprehensive and the risk management at the core of your operations </h3>
          </div>
          <p className="section-subtitle " style={{paddingTop:'0', fontSize:'16px'}}>
            Discover how we seamlessly integrates cybersecurity into your organization's everyday operations while addressing various business challenges. By building airtight defenses, organizations can protect their business across these critical areas:
          </p>

          {/* Services Grid */}
          <div className='services-grid md:grid md:grid-cols-4'>
            {/* Gridcards is defined inside service-page component */}
            <Gridcards data={cardDetails} /> 
            
            {/* <Gridcards data={[]} /> */}
            
          </div>
        </div>
      </section>

      <div className='service-provided-container' style={{marginBottom:'40px', width:'98vw'}}> 
        {/* these components are made above in the page */}
{service === 'Investigation' && <Investigation />}  
        {service === 'Webinars' && <Webinars />}
        {service === 'Sessions' && <Sessions />}
        {service === 'Workshop' && <Workshop />}
        
      </div>

     {/* CTA Section  */}
      <div className='cta-section-services flex flex-col items-center justify-center' >
        <div className='w-[60vw]'> 
        <h3 style={{color:'white', fontSize:'2.4rem', paddingBottom:'30px'}}>Obtain bulletproof evidence with Hack-Sec Digital Forensics Services </h3>
        
        <button type="button" className='service-cta-button bg-white text-blue-900 text-[16px]' onClick={()=>{
          nevigate('/services/service-form#topsec')
        }} > Book Now </button> 
        </div>
      </div>

    </div>
  );
};

export default ServicesPage; 