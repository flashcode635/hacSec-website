// PricingTable.jsx
import React from "react";
import "./PricingTable.css";

// Data based on the reference image
const plans = ["Standard", "Pro", "Enterprise"];

const features = [
  { 
    name: "Premium Tools Access",
    values: ["7 Days", "14 Days", "30 Days"],
  },
  {
    name: " Official Quizes",
    values: [true, true, true],
  },
  {
    name: "CTFs",
    values: [true, true, true],
  },
  {
    name: "Community Access",
    values: [true, true, true],
  },
  {
    name: "Community Projects",
    values: [true, true, true],
  },

  {
    name: "Case Studies",
    values: [true, true, true],
  },
  {
    name: "Audio Books",
    values: [true, true, true],
  },
  {
    name: "Blogs and Articles",
    values: [true, true, true],
  },
  {
    name: "Boot Camps",
    values: [true, true, true],
  },
  {
    name: "Micro Modules",
    values: [true, true, true],
  },
  {
    name: "Macro Modules",
    values: [false, true, true],
  },
  {
    name: "Elite Modules",
    values: [false, false, true],
  },
  {
    name: "Webinars",
    values: [false, true, true],
  },
  {
    name: "1 on 1 Mentorship",
    values: [false, false, true],
  },
  {
    name: "Top Investigations",
    values: [false, false, true],
  },
  {
    name: "Sessions",
    values: [false, false, true],
  },
];

const Tick = () => (
  <span className="icon tick" title="Included">
    {/* ✓ */}
    <img src="https://www.group-ib.com/wp-content/themes/gib-theme/assets/images/gradient-icons/checkmark.svg" alt="" srcset="" />
  </span>
);

const Dash = () => (
  <span className="icon dash" title="Not Included">
    —
  </span>
);

// Renders the correct symbol or text for each feature value
function renderValue(value) {
  if (value === true) return <Tick />;
  if (value === false) return <Dash />;
  return <span>{value}</span>;
}

const PricingTable = () => (
  <div className="pricing-table-container">
    <table className="pricing-table" >
      <thead>
        <tr>
          <th style={{ borderRight: '2px solid rgb(158 167 174)' }}><p className="section-title" style={{display:'flex',justifyContent:'flex-start', fontSize:'1.5rem'}}>Features</p></th>
          {plans.map((plan) => (
            <th key={plan}><p className="section-title" style={{display:'flex',justifyContent:'center', fontSize:'1.5rem'}} >{plan}</p></th>
          ))}
        </tr>
      </thead>

      <tbody>
        {features.map((feature, index) => (
          <tr key={feature.name} className={index % 2 !== 0 ? 'highlight-row' : ''}>
            <td style={{ borderRight: '2px solid rgb(158 167 174)' }}>{feature.name}</td>
            {feature.values.map((value, idx) => (
              <td key={plans[idx]}>{renderValue(value)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PricingTable;
