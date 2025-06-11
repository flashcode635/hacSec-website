import React from "react";
import "./GradientButton.css";

export default function GradientButton({name}) {
  return (
    <button className="gradient-btn">
      <span className="gradient-btn-text">{name}</span>
      <span className="gradient-btn-arrow">&nbsp;&gt;</span>
    </button>
  );
}
