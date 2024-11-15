import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="left">
        D <span>Global</span> Consultancy
      </div>
      <div className={`right ${isMobileMenuOpen ? "mobile-menu" : ""}`}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>
    </div>
  );
};

export default Navbar;
