import React from 'react';
import './learnx.css';
 // Importing custom styles for the tooltip component
import { Link } from 'react-router-dom';
// This component displays a tooltip with a "SYSTEM OVERRIDE" message when hovered over a button.
import './Learnx2.css';
const Tooltip = () => {
  return (
    <div className="holder">
      <div className="hacker-holder">
        <Link to="/Learn_X" className="hacker-btn">
          LearnX
        </Link>
      </div>
    </div>

  );
};


export default Tooltip;
