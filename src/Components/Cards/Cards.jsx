import React from "react";
import "./Cards.css";

const Card = ({ imgSrc, price, description }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt="product" className="card-image" />
      <div className="card-content">
        <h3 className="card-price">{price}</h3>
        <p className="card-description">{description}</p>
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="card-container">
      <hr className="hr-line" />
      <Card
        imgSrc="https://imgs.search.brave.com/RhvBpGJwskdEcd7snpA3M9CsS9zcreNWTrHoxYVENmk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU0/OTQ4MDcyL3Bob3Rv/L2Etd2lyZWxlc3Mt/cm91dGVyLXNob3dp/bmctc2lnbmFsLWJl/YW1zLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1KSVNhSVI4/ZHJsdDBFd203VGhM/c0M4WE9CcjRWczRH/TkF5S1RhUXdwVW1R/PQ"
        price="$29.99"
        description="This is a great product."
      />
      <Card
        imgSrc="https://imgs.search.brave.com/QoNbgiDg8ehh6M8gYXSarZI_hjlD38HAQgbuEW3oYUo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/MTk0NDQ2L3Bob3Rv/L3dpcmVsZXNzLXJv/dXRlci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9OWEwcHZx/bkgtd200ekJJYUxV/T0VGZGFNUEM5SXZ6/cnRvTzlKdGpLSUxJ/Yz0"
        price="$49.99"
        description="Amazing product with great features."
      />

      <Card
        imgSrc="https://imgs.search.brave.com/xdtHApvNlAHjJj1I09iAu_W5UX-lX3dIDUjnIYwU9ZY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/MS8yMi8yMS8zNC9z/ZXZlci0zMTAwMDQ5/XzY0MC5qcGc"
        price="$59.99"
        description="Budget-friendly and durable."
      />
    </div>
  );
};

export default Cards;
