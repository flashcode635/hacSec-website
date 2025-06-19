import React from "react";

const CardStructure=({data})=>{

    return(
        <>  
            <h2 className="section-title">{data.title}</h2>
            <p className="section-subtitle">{data.description}</p>
            {/* <div >
                        <ul> 
                             { data.topics.map((list,id)=>{
            return(             
                            <li key={id}> {list}</li>
            )
           }
           )}

                        </ul>
            </div> */}
          
            
        </>
    )
}

export default CardStructure