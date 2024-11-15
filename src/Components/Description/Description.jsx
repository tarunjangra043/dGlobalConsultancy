import React from "react";
import "./Description.css";

const Description = ({ title, description, imgSrc, imgAlt, reverse }) => {
  return (
    <div className={`description-container ${reverse ? "reverse" : ""}`}>
      <div className="description-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="description-image">
        <img src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
};

export default Description;
