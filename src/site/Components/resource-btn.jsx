import React from "react";
import "./GradientButton.css";
import { useNavigate } from "react-router-dom";

export default function GradientButton({ name, pathname }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (pathname.startsWith("#")) {
      const id = pathname.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(pathname);
    }
  };

  return (
    <button className="gradient-btn" onClick={handleClick}>
      <span className="gradient-btn-text">{name}</span>
      <span className="gradient-btn-arrow">&nbsp;&gt;</span>
    </button>
  );
}
