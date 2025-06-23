import React from "react"
import './team.css'
// import '../frontPage/midSection/mid-section.css'

function Card3({photo, name, position, description}){
    return(
      <div className="product-card " style={{width:'100%', marginBottom:'20px', padding:'20px'}}>
        <div style={{display:'flex', alignItems: 'center'}}>
          <div>
            <img src={photo} className="team-icon" alt="person" />
          </div>
          <div style={{marginLeft: '10px'}}>
            <h3 style={{margin: 0}}>{name}</h3>
            <p style={{margin: 0, fontStyle: 'italic'}}>{position}</p>
          </div>
        </div>
        <p>{description}</p>
      </div>
    )
} 

// You can replace the placeholder URL with your actual image import if available
const placeholderImg = "https://img.icons8.com/ios/50/3498db/training.png";

function TeamList() {
    const productItems = [
        {   name:"Person-1",
            position:"leader",
            description: 'inspires, guides teams, communicates vision, builds trust, and drives meaningful change forward.' 
            

        },

        { name: 'Person-2',
            position:"CEO",

            description:" The CEO defines strategy, leads company direction, drives growth, manages risk, and represents stakeholders’ interests."
         },
        { name: 'Person-3',
            position:"manager",
            description:" A manager plans, organizes, delegates tasks, monitors performance, solves problems, and ensures team productivit"
         },
        {   name: 'Person-4',
            position:"Employee",
            description:" An employee completes tasks, supports goals, follows instructions, learns continuously, and contributes to team success."
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
                {productItems.map((item, index) => (
                    <div key={index} style={{
                       
                        marginTop:'10px', 
                        maxHeight:'30'
                    }} className="grid-col-1 md:w-[27vw] w-[100vw]">
                        <Card3 
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
                <div className="team-page" style={{zIndex:'2'}}>
                    <div className="team-header">
                        <h2>The Forces Behind the Resilience Against Cybercrime </h2>
                        
                        <p>Hack Secure's decentralized yet tightly knit team works around the clock to protect and support businesses, customers, government, the larger community, and everything in between. Meet the individuals who form the unstoppable force that is Hack Secure

                        </p>
                    </div>
                </div>

                <div style={{paddingLeft:"35%",paddingRight:"20%", marginTop:"30px",zIndex:'2'}}> 
                    <h1 >Meet Our Team </h1>
                </div>
                <TeamList/>
                

        </>
    )
}
export default Teams
