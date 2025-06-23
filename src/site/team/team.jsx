import React from "react"
import './team.css'
// import '../frontPage/midSection/mid-section.css'

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

function TeamList() {
    const teamMembersList = [
        {   name:"Person-1",
            position:"leader",
            description: 'Inspires, guides teams, communicates vision, builds trust, and drives meaningful change forward.' 
            

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

    return(
        <div className="team-content" style={{paddingLeft:'20px',paddingRight:'20px'}}> 
            <div style={{
                width:'100vw', 
                backgroundColor: 'black', 
                color: 'white', 
                maxHeight:'30', 
                paddingTop:'20px',
                marginBottom:'40px'

            }} className="grid md:grid-cols-3 grid-cols-1">
                {teamMembersList
        .map((item, index) => (
                    <div key={index} style={{
                       
                        marginTop:'10px', 
                        maxHeight:'30'
                    }} className="grid-col-1 md:w-[27vw] w-[90vw]">
                        <TeamCard 
                            photo={placeholderImg} 
                            name={item.name}
                            position={item.position}
                            description={item.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    ) 
}

const Teams=()=>{
    return(
        <>
                <div className="team-page" style={{zIndex:'2',}}>
                    <div className="team-header">
                        <h1>The Forces Behind the Resilience Against Cybercrime </h1>
                        
                        <p style={{paddingTop:'2%',color:'#b5b7ba',fontSize:'18px'}}>Hack Secure's decentralized yet tightly knit team works around the clock to protect and support businesses, customers, government, the larger community, and everything in between. Meet the individuals who form the unstoppable force that is Hack Secure

                        </p>
                    </div>
                </div>

                <div style={{paddingLeft:"35%",paddingRight:"20%", marginTop:"30px",zIndex:'2'}}> 
                    <h1 className="team-intro-title">Meet Our Team </h1>
                </div>
                <TeamList/>
                

        </>
    )
}
export default Teams
