import styled from "styled-components";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
  .menu {
    width: 60%;
    min-width: 653px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    margin:0;
    padding:0;
    position: relative;
    a {
      text-decoration: none;
    }
    .dropdown {
      display: flex;
      flex-direction: column;
      position: absolute;
      z-index: 10;
      background-color: #fff;
      padding: 1rem;
      border-radius: .4rem;
    }
  }

  .burger {
    position: fixed;
    z-index: 10;
    right: 0;
  }

  @media screen and (max-width: 769px) {
    color: #D25C33;
    background-color: rgba(255, 255, 255, 50%);
    border-radius: 0 0 20px 0;
    position: fixed;
    z-index: 4;
    .logo,
    .burger {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-right: .5rem;
    }

    .burger {
      max-width: 120px;
    }

    .mobile-menu {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      background-color: #30221E;
      opacity: 96%;
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
        color: #F5ECE9;
      }
      .menu {
        height: 70vh;
        display: flex;
        flex-direction: column;
        min-width: unset;
      }

      .mobile-logo {
        margin-top: 4rem;
        width: 50px;
        height: 50px;
        border: 1px solid black;
        border-radius: 50%;
        padding: 1rem;
        display: grid;
        place-items: center;
      }

      .deck {
        img {
          width: 100%;
          border-radius: 50%;
        }

        position: absolute;
      }

      .one {
        left: 0;
        top: 20%;
        width: 129px;
        padding: 1rem;
        border-radius: 50%;
      }
      .two {
        right: 0;
        bottom: 20%;
        width: 100px;
      }
      .three {
        left: 20%;
        bottom: 0%;
        width: 70px;
      }
      .four {
        left: 0;
        top: 0;
        width: 70px;
      }
    }
  }
`;

export default NavWrapper