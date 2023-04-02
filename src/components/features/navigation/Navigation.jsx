import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavWrapper from './NavWrapper'
import LanguageButton from '../language-btn/LanguageButton'

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleMouseEnter = () => {
    setIsDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    setIsDropdownOpen(false)
  }

  return (
    <NavWrapper className="nav-bar">
      <div className="logo">
        <Link to="/">PlaceHolder</Link>
      </div>
      <ul className="menu">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/bookings">Bookings</Link>
        </li>
        <li
          className="nav-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseLeave}
        >
          Services
          {isDropdownOpen && (
            <div className="dropdown" onMouseLeave={handleMouseLeave}>
              <Link to="/massages">Massages</Link>
              <Link to="/gift-card">Gift card</Link>
              <Link to="/sophrology">Sophrology</Link>
            </div>
          )}
        </li>
        <li className="nav-item">
          <Link to="/about">About me</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
      <div className="right-menu">
        <LanguageButton />
      </div>
    </NavWrapper>
  )
}

export default Navigation
