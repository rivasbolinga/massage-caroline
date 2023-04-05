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

    @media screen and (max-width: 768px) {
      flex-direction: column;
      background-color: white;
      width: 100%;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      padding: 0;
      min-width: unset;
      align-items: center;
      z-index: 5;
    }
  }

  .burger {
    position: fixed;
    z-index: 10;
    right: 0;
  }

  @media screen and (max-width: 768px) {
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
    }

    .burger {
      max-width: 120px;
    }
  }
`;

export default NavWrapper