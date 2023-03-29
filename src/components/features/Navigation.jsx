import React, { useState } from "react";
import styled from "styled-components";

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
        <span>PlaceHolder</span>
      </div>
      <ul className="menu">
        <li className="nav-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleMouseLeave}>
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

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  .menu {
    width: 40%;
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    position: relative;
    a {
      text-decoration: none;
    }
    .dropdown {
      display: flex;
      flex-direction: column;
      position: absolute;
    }
  }
`

export default Navigation;
