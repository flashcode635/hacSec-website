import React from "react";
export default function NewSection() {
    const taglist=[
        {
            id:1,
            title:"Comprehensible",
            detail:'Intuitive and easy-to access dashboards, detailed reports and clear takedown processes.',
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
        },]
    return(
        <>
            <section>
                <div className="flex flex-col items-center justify-center ">
                    <div className="md:w-[70vw] w-[100vw] text-center">
                        <h1 style={{fontSize:'2.8rem'}}> Multifaceted approach to creating innovative digital brand protection software </h1>
                        <span className="text-gray-400"> We make cyber protection tailored, cohesive, and holistic.</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 w-[70vw]  gap-7" style={{marginTop:'40px'}} >
                        {taglist.map((data)=>(
                            <>
                                <div key={data.id} className="text-center items-center">
                                    <div className="flex justify-center"> 
                                    <img className="w-[170px]" src={data.icon} alt="" srcset="" />
                                    </div>

                                    <h2>{data.title}</h2>
                                    <span className="text-gray-400 text-sm w-[70%]" style={{padding:'4px'}}> {data.detail} </span>
                                </div>
                            </>
                        ))}
                        
                    </div>
                </div>
            </section>
        </>
    )
}