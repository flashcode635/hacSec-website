import React from 'react';
import styled from 'styled-components';

const LoaderJnr = () => {
  return (
    <StyledWrapper>
      <section style={{margin:'80px ', width:'100vw'}}> 
        <div className="textWrapper">
          <span className="text" style={{width:'90vw'}}>Coming Soon...</span>
          <div className="invertbox" />
        </div>
      </section>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .textWrapper {
    height: fit-content;
    width: fit-content;
    font-size: 7rem;
    font-weight: 700;
    letter-spacing: 0.25ch;
    position: relative;
    z-index: 0;
    color: white;
  }
.text{
font-size: 6rem;
}
  .invertbox {
    position: absolute;
    height: 100%;
    aspect-ratio: 1/1;
    left: 0;
    top: 0;
    border-radius: 20%;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: invert(100%);
    animation: move 2s ease-in-out infinite;
  }

  @keyframes move {
    50% {
      left: calc(100% - 3rem);
    }
  }`;

export default LoaderJnr;


