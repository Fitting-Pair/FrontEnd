import styled from "styled-components";
import theme from "../../../../styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 800px;
  height: 100%;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 90%;
  margin-top: 110px;

  button {
    background-color: black;
    color: #fff;
    border-radius: 30px;
    min-width: 250px;
    width: 90%;
    height: 55px;
    font-family: ${theme.FONT.ROBOTO_BOLD};
    font-size: 20px;
  }
`;

const Image = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  min-width: 250px;
  width: 90%;
  height: 450px;
  margin-bottom: 25px;

  background-color: #fff;
  border-radius: 24px;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);
  img {
    width: 250px;
    height: 250px;
  }
`;

const Logo = styled.div`
  position: absolute;
  bottom: -5px;
`;

export { Container, ContentWrapper, Image, Logo };
