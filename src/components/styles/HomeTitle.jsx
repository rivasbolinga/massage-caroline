import styled from "styled-components";

const TitleWrap = styled.div`
  width: 100%;
  h2{
    font-size: 2.5rem;
    background-color: $clear-pink;
    margin: 10px;
    padding: 30px 10px 30px 10px;
    text-align: center;
    @media screen and (max-width: 426px) {
      font-size:1.5rem;
    }
  }
`;

export default TitleWrap;