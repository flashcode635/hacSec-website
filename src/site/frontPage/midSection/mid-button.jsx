import React from 'react';
import styled from 'styled-components';

const Button = ({name}) => {
  return (
    <StyledWrapper>
      <div className="outer-cont flex">
        
        {name}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .flex {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .outer-cont {
    padding: 12px 20px;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    position: relative;
    background: linear-gradient(90deg,rgba(96, 91, 252, 0),rgba(203, 147, 245, 0.04),rgb(17, 56, 246));
    border-radius: 12px;
    color: #fff;
    transition: all 0.3s ease;
    box-shadow:
      inset 0px 0px 5px rgba(255, 255, 255, 0.66),
      inset 0px 35px 30px #000,
      0px 5px 10px #000000cc;
    text-shadow: 1px 1px 1px #000;
  }
  .outer-cont::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    border-radius: 12px;
    filter: blur(0);
    z-index: -1;
    box-shadow: none;
    background: conic-gradient(
rgba(0, 0, 0, 0.11) 80deg,
      rgba(64, 104, 247, 0.14),
      rgba(170, 74, 243, 0.11),
      rgba(91, 166, 252, 0.09),
rgba(0, 0, 0, 0.12) 280deg
    );
    transition: all 0.3s ease;
  }
  .outer-cont:hover::before {
    filter: blur(15px);
  }
  .outer-cont:active::before {
    filter: blur(5px);
    transform: translateY(1px);
  }
  .outer-cont:active {
    box-shadow:
      inset 0px 0px 5px #ffffffa9,
      inset 0px 35px 30px #000;
    margin-top: 3px;
  }`;

export default Button;

// This code defines a styled button component using React and styled-components.
// The button has a gradient background, a shadow effect, and a hover animation that applies a blur effect to the background.