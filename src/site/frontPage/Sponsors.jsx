import React from 'react';
const array= [
  {
    id:1,
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRGewdAlr9rXt9NlVjePKYAaKmxZWfn4QtQ&s'
  },
  {
    id:2,
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9gK-j9ALC1CxXf34bI6mac1690LyWc4l3TQ&s'
  },
  {
    id:3,
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRGewdAlr9rXt9NlVjePKYAaKmxZWfn4QtQ&s'
  },
  {
    id:4,
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRGewdAlr9rXt9NlVjePKYAaKmxZWfn4QtQ&s'
  },
  {
    id:5,
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLOJtu4UCGSuagrcNWPFXZ9zgUXN1AozCN0aIJ9Q_NGoZ_WLG5IjCOuTHW8eBk47IxzQ&usqp=CAU'
  }]

const Sponsors = () => {
  return (
    <div className="sponsors-section">
      <div className="sponsors-content">
        {[1, 2, 3, 4,5].map((sponsor) => (
          <div key={sponsor} className="sponsor-item">
            Sponsor {sponsor}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
