import React, { useState } from "react";
import NavWrapper from "./NavWrapper";

const Navigation = () => {
  const [width] = useState(window.innerWidth);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <NavWrapper className="nav-bar">
      <div className="logo">
        <span>PlaceHolder</span>
      </div>
      <ul className="menu">
        <li className="nav-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={width<769?handleMouseEnter:handleMouseLeave}>
          <a href="#">Home</a>
          {isDropdownOpen && (
            <div className="dropdown" onMouseLeave={handleMouseLeave}>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
            </div>
          )}
        </li>
        <li className="nav-item">
          <a href="#">Bookings</a>
        </li>
        <li className="nav-item">
          <a href="#">Massages</a>
        </li>
        <li className="nav-item">
          <a href="#">Syphilology</a>
        </li>
        <li className="nav-item">
          <a href="#">Gift card</a>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Navigation;
