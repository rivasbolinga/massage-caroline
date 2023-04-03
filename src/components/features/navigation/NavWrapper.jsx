import styled from "styled-components";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
  .menu {
    width: 40%;
    min-width: 439px;
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
      position: absolute;
      left: 0;
      top: 0;
      padding: 0;
      min-width: unset;
      align-items: center;
      z-index: 5;
    }
  }

  .burger {
    position: relative;
    z-index: 2;
  }
`;

export default NavWrapper