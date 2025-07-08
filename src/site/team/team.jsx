import React from "react"
import './team.css'
// import '../services-page/servicesPage.css'

function TeamCard({ photo, name, position, description }) {
  return (
    <div className="team-card">
      <div className="team-card-header">
        <img src={photo} className="team-icon" alt="person" />
        <div className="team-card-info">
          <h3>{name}</h3>
          <p className="team-card-position" style={{padding:'0'}}>{position}</p>
        </div>
      </div>
      <p className="align-left">{description}</p>
    </div>
  );
}


// You can replace the placeholder URL with your actual image import if available
const placeholderImg = "https://img.icons8.com/ios/50/3498db/training.png";
const teamMembersList = [
        {   name:"Person-1",
            position:"leader",
            description: 'Top 7 influencers in global cybersecurity by Business Insider, Member of Europol EC3 Advisory Group, Member of the UN Open-ended Intergovernmental Expert Group' 
            

        },

        { name: 'Person-2',
            position:"CEO",

            description:"The CEO defines strategy, leads company direction, drives growth, manages risk, and represents stakeholders’ interests."
         },
        { name: 'Person-3',
            position:"manager",
            description:"A manager plans, organizes, delegates tasks, monitors performance, solves problems, and ensures team productivity."
         },
        {   name: 'Person-4',
            position:"Employee",
            description:"An employee completes tasks, supports goals, follows instructions, learns continuously, and contributes to team success."
         },
         {   name: 'Person-5',
             position:"Employee",
             description:" An employee completes tasks, supports goals, follows instructions, learns continuously, and contributes to team success."
          }
    ];
// function TeamList({indexes}) {
    

//     return(
//         <div className="team-content" style={{paddingLeft:'20px',paddingRight:'20px'}}> 
//             <div style={{
//                 width:'100vw', 
//                 backgroundColor: 'black', 
//                 color: 'white', 
//                 maxHeight:'30', 
//                 paddingTop:'20px',
//                 marginBottom:'40px'

//             }} className="grid md:grid-cols-3 grid-cols-1">
//                 {teamMembersList[indexes]
//         .map((item, index) => (
//                     <div key={index} style={{
                       
//                         marginTop:'10px', 
//                         maxHeight:'30'
//                     }} className="grid-col-1 md:w-[27vw] w-[90vw]">
//                         <TeamCard 
//                             photo={placeholderImg} 
//                             name={item.name}
//                             position={item.position}
//                             description={item.description}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     ) 
// }
function TeamList({indexes}) {
    const member = teamMembersList[indexes];
    if (!member) return null; // handle out-of-bounds index

    return (
        <div className="team-content" style={{paddingLeft:'20px',paddingRight:'20px', maxHeight:'fit-content'}}> 
            <div style={{
                width:'100%', 
                backgroundColor: 'transparent', 
                color: 'white', 
                maxHeight:'30', 
                paddingTop:'0px',
                marginBottom:'40px'
            }} className="grid ">
                <div style={{
                    marginTop:'10px', 
                    maxHeight:'30', color:'black'
                }} className="grid-col-1 md:w-[27vw] w-[90vw]">
                    <TeamCard 
                        photo={placeholderImg} 
                        name={member.name}
                        position={member.position}
                        description={member.description}
                    />
                </div>
            </div>
        </div>
    );
}

const Teams=()=>{
    const extraList=[
        
        {
            id:1,
            image:"https://www.group-ib.com/wp-content/uploads/illustration-7.png.webp",
            heading:"Leading the fight against cybercrime",
            details:"Our team of over 250 global cyber defend remain vigilant actively support of an organizations in mitigating active and local cyber threats to guarantee uninterrupted operations and minimum risk impact of your work in best way."
        },

        {
            id:2,
            image:"https://www.group-ib.com/wp-content/uploads/illustration-2-4.png.webp",
            heading:"Digital Crime Resistance Centers (DCRCs)",
            details:"Group-IB's regional offices and mission-critical Digital Crime Resistance Centers (DCRCs) continually provide assistance and strategic knowledge about local threats, enabling immediate response"
        },

        {
            id:3,
            image:"https://www.group-ib.com/wp-content/uploads/illustration-1-4.png.webp",
            heading:"Innovation as a core value of teams",
            details:" Our drive to ensure security pushes us to build technology capabilities that surpass the market standard twofold. This commitment keeps us well ahead of adversaries and helps us safeguard businesses and citizens"
        },


    ]
    return(
        <>
        {/* section-1 : hero-section */}
                <section className="teams-hero">
                       <div className="teams-hero-content">
                         <h1 style={{fontSize:'2.9rem'}}> The Forces Behind the Resilience Against Cybercrime</h1>
                         <p className="details-teams" style={{fontFamily:'system-ui'}}>Hack Secure's decentralized yet tightly knit team works around the clock to protect and support businesses, customers, government, the larger community, and everything in between. Meet the individuals who form the unstoppable force that is Hack Secure</p>
                         {/* <GradientButton name="Request a Consultation" /> */}
                       </div>
                </section>
                
                <section className="" style={{width:'100vw',display:'flex', alignItems:'center', marginTop:'4rem',justifyContent:'center', flexDirection:'column'}}>
                    <div style={{width:'70vw',}}>
                        <div className="text-center">
                            <h1 style={{marginBottom:'0',}}>Serving one joint mission - </h1>
                            <h1> Fight against cybercrime </h1>
                            <span className="text-gray-400 w-[70%]" >
                                Decentralized yet tightly knit team works around the clock to protect and support businesses, customers, government, the larger community, and everything in between. Meet the individuals who form the unstoppable force that is Group-IB
                            </span>
                        </div>

                        <div className=" grid md:grid-cols-3 grid-cols-1 gap-5"> 
                            {extraList.map((data)=>(

                                <div key={data.id} >
                                    <div style={{ display:'flex',
                                        justifyContent:'center', width:'100%'}}
                                     >

                                    <img className="team-section2-image" src={data.image} alt="" />
                                    </div>

                                    <div style={{display:'flex', flexDirection:'column'}}>
                                    <h2 style={{marginTop:'30px', paddingBottom:'0px'}} className="text-blue-400 text-center "> {data.heading} 
                                        
                                    </h2>
                                    <span style={{textAlign:'center',width:'90%'}} className="text-gray-400 text-sm text-center"> 
                                        {data.details} 

                                    </span>
                                    </div>
                                </div>
                            ))}

                        </div>

                   
                    </div>
                </section>
        {/* section-3 */}
                
                <section style={{zIndex:2}}> 
                    <div> 
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "40px",
                            marginBottom: "20px"
                        }}>
                            <h1 className="team-intro-title" style={{textAlign: "center"}}>The Leadership</h1>
                        </div>
                        {/* <TeamList/>  */}
                        <div style={{
                            display:'flex', 
                            alignItems:'center', 
                            flexDirection:'column', 
                            justifyContent:'center',
                             height:'fit-content', width:'100vw'}}>

                              
                            <div className="teams-reveal">                          <div style={{display:'flex', justifyContent:'center'}}>
                                    <div>
                                    <TeamList indexes={1} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                </section>

                

        </>
    )
}
export default Teams
