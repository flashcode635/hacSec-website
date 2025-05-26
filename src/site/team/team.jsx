import React from "react"
import './team.css'
// import '../frontPage/midSection/mid-section.css'

function Card3({photo, name, position, description}){
    return(
      <div className="product-card">
        <div style={{display:'flex', alignItems: 'center'}}>
          <div>
            <img src={photo} className="product-icon" alt="person"/>
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
const placeholderImg = "https://via.placeholder.com/100";

function TeamList() {
    const productItems = [
        {   name:"Person-1",
            position:"leader",
            description: 'info of person' 

        },

        { name: 'Person-2',
            position:"CEO",

            description:" info of person"
         },
        { name: 'Person-3',
            position:"manager",
            description:" info of person"
         },
        {   name: 'Person-4',
            position:"Employee",
            description:" info of person"
         }
    ];

    return(
        <div className="section-content" style={{paddingLeft:'50px'}}> 
            <div style={{
                width:'100vw', 
                backgroundColor: 'black', 
                color: 'white', 
                display:"flex", 
                maxHeight:'30', 
                paddingTop:'20px',
                marginBottom:'40px'
            }}>
                {productItems.map((item, index) => (
                    <div key={index} style={{
                        paddingRight:'40px', 
                        marginTop:'10px', 
                        maxHeight:'30'
                    }}>
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
                <div className="team-page">
                    <div className="team-header">
                        <h2>The Forces Behind the Resilience Against Cybercrime </h2>
                        
                        <p>Hack Secure's decentralized yet tightly knit team works around the clock to protect and support businesses, customers, government, the larger community, and everything in between. Meet the individuals who form the unstoppable force that is Hack Secure

                        </p>
                    </div>
                </div>
                <div style={{paddingLeft:"35%",paddingRight:"20%", marginTop:"30px"}}> 
                    <h1 >Meet Our Team </h1>
                </div>
                <TeamList/>
                

        </>
    )
}
export default Teams
