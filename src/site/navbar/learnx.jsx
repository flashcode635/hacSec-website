import React from 'react';
import './learnx.css'; // Importing custom styles for the tooltip component
import { Link } from 'react-router-dom';
// This component displays a tooltip with a "SYSTEM OVERRIDE" message when hovered over a button.

const Tooltip = () => {
  return (
    <div className="container">
      <div className="hacker-container">
        <Link to="/Learn_X" className="hacker-btn">
          LearnX
        </Link>

        <div data-text="SYSTEM OVERRIDE" className="hacker-tooltip">
          <span>SYSTEM OVERRIDE</span>
        </div>
      </div>
    </div>
  );
};


export default Tooltip;
