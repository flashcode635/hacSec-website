// PricingTable.jsx
import React from "react";
import "./PricingTable.css";

// Data based on the reference image
const plans = ["Human", "Pro", "Elite"];

const features = [
   {
    name: "Top Investigations",
    values: [false, false, true],
  },
  { 
    name: "Premium Tools Access",
    values: ["7 Days", "14 Days", "30 Days"],
  },
  {
    name: "Cources",
    values: ["Human Cource", "Human Cource", "Human Cource"],
  },
  {
    name: "Micro Modules ",
    values: [true, true, true],
  },
{
    name: "1 on 1 Mentorship",
    values: [false, false, true],
  },
 
    {
    name: "Investigations",
    values: [false, true, false],
  },
  {
    name: "Sessions",
    values: [false, true, true],
  },
  {
    name: "Released Notes",
    values: [false, true, true],
  },
     {name: "Podcast",
    values: [true, true, true],
  },
     {name: "Audio Books",
    values: [true, true, true],
  },
  {
    name: " Official Quizes",
    values: ["Limited Access", true, "Elite Access"],
  },
   {name: "Cyber Laws and Policies",
    values: [true, true, true],
  },
  {
    name: "CTFs",
        values: ["Limited Access", true, "Elite Access"],
  },
    {
    name: "Boot Camps",
    values: [true, true, true],
  },
    {
    name: "Checklist and Templates",
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
    name: "Training Program",
    values: [false, true, true],
  },
 
  // {
  //   name: "Blogs and Articles",
  //   values: [true, true, true],
  // },

  // {
  //   name: "Webinars",
  //   values: [false, true, true],
  // },
  
];

const Tick = () => (
  <span  title="Included">
    {/* ✓ */}
    <img src="https://www.group-ib.com/wp-content/themes/gib-theme/assets/images/gradient-icons/checkmark.svg" alt=""className="icon tick" />
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
          <th style={{ borderRight: '2px solid rgb(158 167 174)' }}><p className="section-title" style={{display:'flex',justifyContent:'start', fontSize:'1.5rem'}}>Features</p></th>
          {plans.map((plan) => (
            <th key={plan}><p className="section-title" style={{display:'flex',justifyContent:'center', fontSize:'1.5rem'}} >{plan}</p></th>
          ))}
        </tr>
      </thead>

      <tbody>
        {features.map((feature, index) => (
          <tr key={feature.name} className={index % 2 !== 0 ? 'highlight-row' : ''}>
            <td style={{ borderRight: '2px solid rgb(158 167 174)', justifyContent:'flex-start', alignItems:'flex-start', textAlign:'left'}}>{feature.name}</td>
            {feature.values.map((value, idx) => (
              <td key={plans[idx]} data-label={plans[idx]}>{renderValue(value)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PricingTable;
