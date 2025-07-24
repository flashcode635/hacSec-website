import React, { useState } from 'react';

const UnifiedTrainingPlatform = () => {
  const sectiontwocards = [
    { id: 1,
       head: '1900+',
        details: 'Successful investigations',
         icon: 'https://www.group-ib.com/wp-content/uploads/managed-xdr.png.webp',
         color:'rgba(0, 140, 255, 0.13)'
        },
    { id: 2,
       head: '200+',
        details: 'employees',
        icon: 'https://www.group-ib.com/wp-content/themes/gib-theme/assets/images/main-nav/ti.png' ,
       color:'rgba(1, 85, 108, 0.261)',


      },
    { id: 3,
       head: '700+', 
       details: 'enterprise customers', 
       icon: 'https://www.group-ib.com/wp-content/uploads/asm-main-icon-min.png.webp' ,
    color:'rgba(13, 11, 139, 0.261)'
      

      },
    { id: 4, 
      head: '200+', 
      details: 'patents and applications',
       icon: 'https://www.group-ib.com/wp-content/uploads/managed-xdr.png.webp' ,
       color:'rgba(0, 128, 128, 0.175)',
    
      },
    { id: 5,
       head: '60', 
       details: 'countries', 
       icon: 'https://www.group-ib.com/wp-content/themes/gib-theme/assets/images/main-nav/ti.png' ,
    color:'rgba(81, 0, 255, 0.13)'
      },
    { id: 6,
       head: '14',
        details: 'unique Digital Crime Resistance Centers', 
        icon: 'https://www.group-ib.com/wp-content/uploads/asm-main-icon-min.png.webp' ,
    color:'rgba(0, 140, 255, 0.13)'
      },
  ];

  // store id of hovered card, or null if none hovered
  const [hoveredId, setHoveredId] = useState(null);



  return (
    <div className="training-section">
      <div className="training-content">
        <h1 className="training-heading">
          Build for next-gen learners
        </h1>
        <span className="training-text">
          Hack-Sec where global learners come to learn, secure and lead the digital era.
          <span> All in one place</span>
        </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ padding: '40px', width: '75vw' }}>
          { 
          sectiontwocards.map((data) => { 
             const hoverStyle = {
    boxShadow: `1px 0px 13px 10px ${data.color}`,
    transform: 'translateY(-8px)',
    transition: 'transform 0.3s ease',
  }; 
  return(

            <div
              key={data.id}
              className="home-page-section2"
              onMouseEnter={() => setHoveredId(data.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={hoveredId === data.id ? hoverStyle : undefined}
              
            >
              <div style={{ height: '80px', width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '7vh' }}>
                <img src={data.icon} alt="" />
              </div>

              <h1 style={{ fontSize: '2.1rem' }}>{data.head}</h1>
              <span className="text-gray-400 text-center">{data.details}</span>
            </div>
  )
          }
          )}
        </div>
      </div>
    </div>
  );
};

export default UnifiedTrainingPlatform;

