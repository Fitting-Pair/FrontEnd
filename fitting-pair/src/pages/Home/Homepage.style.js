import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  height: 100vh;

  button {
    ${theme.ALIGN.ROW_CENTER};
    padding: 8px 20px;
    border: none;
    border-radius: 50px;
    box-shadow: 2px 6px 10px -7px rgba(0, 0, 0, 0.5);
    color: ${theme.COLOR.GREEN};
    font-family: ${theme.FONT.ROBOTO_MEDIUM};

    img {
      margin-left: 5px;
    }

    @media ${theme.WINDOW_SIZE.IPAD_PRO} {
      font-size: 14px;
      padding: 10px 23px;
    }
  }
`;

const LogoWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};

  img {
    width: 80%;
    margin-bottom: 40px;

    @media ${theme.WINDOW_SIZE.IPAD_PRO} {
      width: 100%;
    }
  }
`;

const Text = styled.div`
  p {
    color: #fff;
    text-shadow: 1px 2px 2px rgba(136, 136, 136, 0.6);
    font-size: 15px;
    font-family: ${theme.FONT.INTER_MEDIUM};
    text-align: center;
    margin-bottom: 20px;

    @media ${theme.WINDOW_SIZE.IPAD_PRO} {
      font-size: 20px;
      margin-bottom: 23px;
    }
  }
`;

export { Container, LogoWrapper, Text };
