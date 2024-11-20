import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>
          Internet Service <br /> We Are Providing
        </h2>
        <p>
          Explore our diverse range of internet services, designed to meet your
          connectivity needs with speed, reliability, and unmatched customer
          support. Whether you're looking for high-speed broadband, flexible
          plans, or robust security features, we're here to deliver the best
          internet experience, ensuring you stay connected with the world
          effortlessly.
        </p>
        <button>View Services</button>
      </div>
    </div>
  );
};

export default Header;
