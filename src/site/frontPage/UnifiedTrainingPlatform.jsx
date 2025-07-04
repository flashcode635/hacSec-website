import React from 'react';

const UnifiedTrainingPlatform = () => {
const sectiontwocards=[
  {
    id:1,
    head:'1900+',
    details:'Successful investigations',
    icon:'https://www.group-ib.com/wp-content/uploads/managed-xdr.png.webp'
  },
  {
    id:2,
    head:'200+',
    details:'employees',
    icon:'https://www.group-ib.com/wp-content/themes/gib-theme/assets/images/main-nav/ti.png'
  },
  {
    id:3,
    head:'700+',
    details:'enterprise customers',
    icon:'https://www.group-ib.com/wp-content/uploads/asm-main-icon-min.png.webp'

  },
  {
    id:4,
    head:'200+',
    details:'patents and applications',
    icon:'https://www.group-ib.com/wp-content/uploads/managed-xdr.png.webp'
  },
  {
    id:5,
    head:'60',
    details:'countries',
    icon:'https://www.group-ib.com/wp-content/themes/gib-theme/assets/images/main-nav/ti.png'
  },
  {
    id:6,
    head:'14',
    details:'unique Digital Crime Resistance Centers',
    icon:'https://www.group-ib.com/wp-content/uploads/asm-main-icon-min.png.webp'
  },
 ]
  return (
    <div className="training-section">
      <div className="training-content">
        <h1 className="training-heading">
          {/* Hack Secure's Unified Training Platform */}
          Build for next-gen learners
        </h1>
        <span className="training-text">
          Hack Secure where global learners come to learn, secure and lead the digital era. 
        <span> All in one place</span>
        </span>
      </div>
{/* section2 */}
<div className='' style={{display:'flex', justifyContent:'center'}}> 
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4' style={{padding:'40px', width:'70vw', }}>
            {sectiontwocards.map((data)=>(

                <div className='home-page-section2 ' key={data.id}>
                  <div className='' style={{height:'80px', width:'100%', display:'flex', justifyContent:'center', marginBottom:'10%'}}> 
                    <img  src={data.icon} alt="" srcset="" />
                  </div>

                  <h1 style={{fontSize:'2.1rem'}}> {data.head}</h1>
                  <span className='text-gray-400'> {data.details} </span>

                </div>
                ))}
        
        
      </div>
      </div>

    </div>
  );
};

export default UnifiedTrainingPlatform;
