import React from "react";
import "./GradientButton.css";
import { useNavigate } from "react-router-dom";

export default function GradientButton({name,pathname}) {
  // const nevigate = useNavigate();
  // const handleClick = () => {
  //   nevigate(pathname)
    
  // };
  return (
    <button className="gradient-btn">
      <a href={pathname} style={{textDecoration:'none'}}>
      <span className="gradient-btn-text">{name}</span>
      <span className="gradient-btn-arrow">&nbsp;&gt;</span>
      </a>
    </button>
  );
}
