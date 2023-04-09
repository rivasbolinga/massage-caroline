import styled from "styled-components";

const TitleWrap = styled.div`
  width: 100%;
  h2{
    font-size: 40px;
    background-color: $clear-pink;
    margin: 10px;
    padding: 30px 10px 30px 10px;
    text-align: center;
    @media screen and (max-width: 426px) {
      font-size:25px;
    }
  }
`;

export default TitleWrap;