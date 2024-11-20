import React from "react";
import "./Card.css";

const Card = ({ image, title, description, price }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
        <div className="card-footer">
          <span className="card-price">${price}</span>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
