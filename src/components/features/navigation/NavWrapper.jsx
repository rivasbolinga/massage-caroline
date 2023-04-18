import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  position: relative;
  background-color: rgba(255, 255, 255, 0%);
  position: fixed;
  z-index: 4;
  width: 100%;

  a, li {
    font-family: 'Playfair Display', sans-serif;
    color: white;
    font-size: 20px;
  }

  .menu {
    width: 60%;
    min-width: 653px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: relative;
    a {
      text-decoration: none;
    }
    .dropdown {
      display: flex;
      flex-direction: column;
      position: absolute;
      z-index: 10;
      background-color: rgb(91,78,70);
      color:brown;
      padding: 1rem;
      border-radius: 0.4rem;
    }
  }

  .burger {
    position: fixed;
    z-index: 10;
    right: 0;
  }

  .logo-navbar {
    width: 80px;
    margin-right: 100px;
  }

  @media (min-width: 370px) {
    .logo-navbar {
    width: 100px;
    margin-right: 10px;
  }
  }
  @media screen and (max-width: 769px) {
    width: 25%;
    color: white;
    background-color: rgba(255, 255, 255, 0%);
    border-radius: 0 0 20px 0;
    position: fixed;
    z-index: 4;
    font-size: 20px;
    margin-right: 10px;
    .hamburger-react {
      color: rgb(246,234,225);
    }
    .burger {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0;
      margin-right: 0.5rem;
    }

    .logo-mobile {
      width: 120px;
      margin-top: 50px;
    }

    .burger {
      max-width: 120px;
    }

    .mobile-menu {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      color: #9E8053;
      width: 100%;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      padding: 0;
      min-width: unset;
      align-items: center;
      z-index: 5;
      a {
        color: rgb(160,154,150);
      }
      .menu {
        height: 70vh;
        display: flex;
        flex-direction: column;
        min-width: unset;
      }
  }
`;

export default NavWrapper;
