import styled from "styled-components";
import theme from "../../../styles/theme";

const Container = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    font-family: ${theme.FONT.ROBOTO_MEDIUM};
    background-color: white;
    border-radius: 20px;
    padding: 5px 13px;
    font-size: 13px;
  }

  svg {
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 50%;
    padding: 6px;
  }

  img {
    background-color: white;
    border-radius: 50%;
    padding: 6.5px;
  }
`;

export { Container };
