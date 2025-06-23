import React from 'react';

const Sponsors = () => {
  return (
    <div className="sponsors-section">
      <div className="sponsors-content">
        {[1, 2, 3, 4].map((sponsor) => (
          <div key={sponsor} className="sponsor-item">
            Sponsor {sponsor}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
