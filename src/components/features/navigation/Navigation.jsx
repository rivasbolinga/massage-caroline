import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavWrapper from "./NavWrapper";

const Navigation = () => {
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
        <Link to="/">PlaceHolder</Link>
      </div>
      <ul className="menu">
        <li className="nav-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleMouseLeave}>
          <Link to="/">Home</Link>
          {isDropdownOpen && (
            <div className="dropdown" onMouseLeave={handleMouseLeave}>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          )}
        </li>
        <li className="nav-item">
          <Link to="/bookings">Bookings</Link>
        </li>
        <li className="nav-item">
          <Link to="/massages">Massages</Link>
        </li>
        <li className="nav-item">
          <Link to="/syphilology">Syphilology</Link>
        </li>
        <li className="nav-item">
          <Link to="/gift-card">Gift card</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Navigation;
