import React from 'react';
const array= [
  {
    id:1,
    url:  'https://ik.imagekit.io/ikmedia/site_graphics/customers/logos/Swiggy_logo.svg?updatedAt=1713502133643?tr=w-120,dpr-2'
  },
  {
    id:2,
    url:  'https://ik.imagekit.io/ikmedia/website-2024/customers/bookmyshow.svg?updatedAt=1710245762904?tr=w-120,dpr-2'
  },
  {
    id:3,
    url:'https://ik.imagekit.io/ikmedia/site_graphics/customers/logos/Stamped.svg?tr=w-120,dpr-2'
  },
  {
    id:4,
    url:'https://ik.imgkit.net/ikmedia/website-assets/customer-logo/traveloka_tKBPqER5UW.svg?tr=w-120,dpr-2'
  },
  // {
  //   id:5,
  //  url:  'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  // }
]

const Sponsors = () => {
  return (
    <div className="sponsors-section">
      <div className="sponsors-content">
        {/* {[1, 2, 3, 4,5].map((sponsor) => (
          <div key={sponsor} className="sponsor-item">
            Sponsor {sponsor}
          </div>
        ))} */}
  <div className='new-content'> 

        {array.map((sponsor)=> (
          <div key={sponsor.id}>
            <img className='sponsor-image' src={sponsor.url}/>  
          </div>
        ))}
  </div>
      </div>
    </div>
  );
};

export default Sponsors;
