import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterWrap>
      <div className="footer-container">
        <div className="footer-item">
          <h3>Get In Touch</h3>
          <ul className="footer-list">
            {/* Andrea first you have to go here it's important for you */}
            <li><a href="https://goo.gl/maps/qrTwinB554XdUAet8" target="_blank" rel="noreferrer"><i class="fa-solid fa-location-dot" />612 E Mitchell St, Kendallville, IN 46755, United States</a></li>
            <li><a href="tel:+012 345 67890"><i class="fa-solid fa-phone-volume" />+012 345 67890</a></li>
            <li><a href="mailto:info@example.com"><i class="fa-solid fa-envelope-open" />info@example.com</a></li>
          </ul>
        </div>
        <div className="footer-item">
          <h3>Quick Links</h3>
          <ul className="footer-list">
            <li className="nav-item">
              <Link to="/#top"><i className="fa-solid fa-angle-right" /> Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/bookings/#top"><i className="fa-solid fa-angle-right" /> Bookings</Link>
            </li>
            <li className="nav-item">
              <Link to="/massages/#top"><i className="fa-solid fa-angle-right" /> Massages</Link>
            </li>
            <li className="nav-item">
              <Link to="/syphilology/#top"><i className="fa-solid fa-angle-right" /> Syphilology</Link>
            </li>
            <li className="nav-item">
              <Link to="/gift-card/#top"><i className="fa-solid fa-angle-right" /> Gift card</Link>
            </li>
            <li className="nav-item">
              <Link to="/about/#top"><i className="fa-solid fa-angle-right" /> About us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/#top"><i className="fa-solid fa-angle-right" /> Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <h3>developer's Contact</h3>
          <form>
            <div className="from-container">
              <input type="text" />
              <input type="text" />
              <textarea type="text" />
            </div>
            <button type="submit">contact Developers</button>
          </form>
        </div>
      </div>
      <div className="copyright-section">
        <div>© Caroline Massage Hub, All Right Reserved.</div>
        <div>Design by <a href="https://www.linkedin.com/in/andrearivaspalacios/">Andrea</a> and <a href="https://www.linkedin.com/in/adarsh-pathak-powerlevel/">Adarsh</a></div>
      </div>
    </FooterWrap>
  )
}

const FooterWrap = styled.footer`
  

  .footer-list {
    list-style-type:none;
    
  }
  a {
    text-decoration: none;
  }
`;

export default Footer
