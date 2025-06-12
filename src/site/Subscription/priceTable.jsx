// PricingTable.jsx
import React from "react";
import "./PricingTable.css";

const plans = ["Free", "Premium", "Business"];

const features = [
  {
    name: "Personal hackable instances",
    values: [true, true, true],
  },
  {
    name: "Hacking challenges",
    values: [true, true, true],
  },
  {
    name: "Learning content",
    values: ["Free rooms", "All rooms", "All rooms"],
  },
  {
    name: "Full access to learning paths",
    values: [false, true, true],
  },
  {
    name: "Web-based AttackBox & Kali",
    values: ["1 hour a day", "Unlimited", "Unlimited"],
  },
  {
    name: "Access to Networks",
    values: [false, true, true],
  },
  {
    name: "Faster machines",
    values: [false, true, true],
  },
];

const Tick = () => (
  <span className="icon tick" title="Yes">
    ✓
  </span>
);

const Cross = () => (
  <span className="icon cross" title="No">
    ✗
  </span>
);

function renderValue(value) {
  if (value === true) return <Tick />;
  if (value === false) return <Cross />;
  return <span>{value}</span>;
}

const planPrices = ["Free", "Pro- $9/mo", "Enterprise- $29/mo"];

const PricingTable = () => (
    <div className="pricing-table-container">
        <h2>Plan Features</h2>
        <table className="pricing-table">
            <thead>
                <tr>
                    <th>Plan Features</th>
                    {plans.map((plan) => (
                        <th key={plan}>{plan}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {features.map((feature) => (
                    <tr key={feature.name}>
                        <td>{feature.name}</td>
                        {feature.values.map((value, idx) => (
                            <td key={plans[idx]}>{renderValue(value)}</td>
                        ))}
                    </tr>
                ))}
                <tr>
                    <td></td>
                    {plans.map((plan, idx) => (
                        <td key={plan}>
                            <div className="plan-action">
                                <a href="/signin">
                                    <button className="tier-apply-button">Apply Now</button>
                                </a>
                            </div>
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>
        
    </div>
);

export default PricingTable;
