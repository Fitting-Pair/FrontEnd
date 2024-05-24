import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.button`
  width: ${(props) => (props.$half ? "265px" : "530px")};
  height: 50px;
  background-color: ${theme.COLOR.GREEN};
  color: #fff;
  margin: 16px;

  box-shadow: 2px 6px 10px -7px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  border: none;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 240px;
    height: 40px;
  }
`;

export { Container };
