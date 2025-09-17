import React from "react";
export default function NewSection() {
    const taglist=[
        {
            id:1,
            title:"Comprehensible",
            detail:'Intuitive and easy-to access dashboards, detailed reports and clear takedown processes of need.',
            icon:'https://www.group-ib.com/wp-content/uploads/drp-card-lg-1-min.jpg.webp'
        },
        {
            id:2,
            title:"Actionable",
            detail:'Automated neural-based detection system and all-in-one brand protection platform for business and analysts.',
            icon:'https://www.group-ib.com/wp-content/uploads/drp-card-lg-2-min-1.jpg.webp'
        },

        {
            id:3,
            title:"Human-curated",
            detail:'70+ internationally distributed cybersecurity and brand protection professionals at your disposal.',
            icon:'https://www.group-ib.com/wp-content/uploads/drp-card-lg-3-min-1.jpg.webp'
        },
          {
            id:4,
            title:"Teaching the cyber professionals ",
            detail:'Hack Secure proprietary training courses are designed to develop unique applied skills',
            icon:'https://www.group-ib.com/wp-content/uploads/w3-1-150x150.png.webp'
        },
         {
            id:5,
            title:"Hack Secure unified ecosystem",
            detail:'Actor-centric approach to investigating, researching and predicting scammers behavior and tool development.',
            icon:'https://www.group-ib.com/wp-content/uploads/drp-card-lg-3-min-1.jpg.webp'
        },
         {
            id:6,
            title:"Full-spectrum support",
            detail:'The content of each course is regularly updated with new cases based on more than 1,200.',
            icon:'https://www.group-ib.com/wp-content/uploads/w4-1-150x150.png.webp'
        },
    ]
    return(
        <>
            <section>
                <div className="flex flex-col items-center justify-center ">
                    <div className="md:w-[70vw] w-[100vw] text-center">
                        <h1 style={{fontSize:'2.8rem'}}> Multifaceted approach to creating innovative digital brand protection software </h1>
                        <span className="text-gray-400"> We make cyber protection tailored, cohesive, and holistic.Supercharge your cyber security and defeat attacks before they begin with knowledge of how, when, where and why threat actors will strike.</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 w-[70vw]  gap-7" style={{marginTop:'40px'}} >
                        {taglist.map((data)=>(
                            <>
                                <div key={data.id} className="text-center items-center">
                                    <div className="flex justify-center"> 
                                    <img className="w-[170px]" src={data.icon} alt=""  />
                                    </div>

                                    <h2>{data.title}</h2>
                                    <span className="text-gray-400 text-sm w-[70%]" style={{padding:'4px'}} > {data.detail} </span>
                                </div>
                            </>
                        ))}
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export function Belowhero(){
    const Listcard=[
        {
            id:1,
            title:'40+',
            detail:'countries where we provide valuale trainings'
        },
        {
            id:2,
            title:'800+',
            detail:'students have been trained at our center'
        },
        {
            id:3,
            title:'90%',
            detail:'students have been satisfied with the quality of our training'
        }]
    return(
        <>
            <div className="flex flex-col items-center justify-center ">
                <div className="md:w-[70vw] w-[100vw] text-center">
                    <h1 style={{fontSize:'2.8rem'}}> About Hack Secure cyber education center</h1>

                    <span  className="text-gray-400" style={{fontSize:'14px'}}>
                         Hack Secure Cyber Education Center was established in 2018. Following the mission of fighting against cybercrime, our center is dedicated to training technical specialists in diverse areas of cybersecurity to facilitate the creation of an effective information security department in any company and enhancing the competencies of law enforcement specialists. 
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 w-[70vw]  gap-7" style={{marginTop:'40px'}} >
                        {Listcard.map((val)=>(
                            <div key={val.id} className="bg-[#1919199e]" style={{border:'1px solid gray', borderRadius:'10px', textAlign:'left', padding:'20px',}}>
                                <h1 style={{margin:'10px 0 20px 0'}}> {val.title} </h1>
                                
                                <span className="text-gray-400 text-sm w-[70%]" style={{}}> {val.detail} </span>
                            </div>

                        ))}
                    </div>
                    
                </div>
            </div>
        </>

    )
}