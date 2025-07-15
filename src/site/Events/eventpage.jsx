import React from 'react';
import './eventpage.css';
import Network from './new';
const EventPage=()=>{
    return(
        <> 
        {/* hero section */}
            <section className='hero-section-events md:h-[80vh] md:w-[100vw]  flex items-center justify-center z-0 h-[70vh]'>
                <div  className='z-100 w-[70vw]' style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <h2 className='' style={{fontSize:'4rem' ,color:'white', textAlign:'center'}}> Mark Your Calendar </h2>
                    <span className='text-gray-200' style={{textAlign:'center'}}> Get ready to explore inspiring events that spark ideas, fuel connections, and drive change. </span>
                </div>

            </section>

            <section className='' style={{marginTop:'60px'}}>
                <div className='flex items-center justify-center font-bolder md:font-normal'> 
                    <h1> Our Meetups </h1> 
                </div>
                <div className='container-cards-events'> 

                <Network/>
                </div>
            </section>
        </>
    )
}
export default EventPage;