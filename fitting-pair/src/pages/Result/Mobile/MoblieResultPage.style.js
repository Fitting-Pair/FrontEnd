import styled from "styled-components";
import theme from "../../../styles/theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: relative;
  width: 100%;
  overflow-x: hidden;
`;

const Title = styled.div`
  font-family: ${theme.FONT.JIMHURIA_REGULAR};
  font-size: 45px;
  margin-top: 100px;

  span {
    color: ${theme.COLOR.ORANGE};
  }
`;

const ResultImg = styled.img`
  margin: 30px 0px;
  width: 300px;
  height: 300px;
`;

const ContentWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const ContentBox = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  font-family: ${theme.FONT.ROBOTO_MEDIUM};
  margin-bottom: 40px;
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  line-height: 24px;

  div {
    margin-bottom: 40px;
  }

  span {
    padding: 0 30px;
    text-align: center;
  }
`;

const SeletedWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};

  h1 {
    font-size: 55px;
    font-family: ${theme.FONT.JIMHURIA_REGULAR};
    color: ${theme.COLOR.ORANGE};
    letter-spacing: 1.1px;
  }
`;

const ApparelWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  margin-bottom: 20px;

  img {
    margin: 20px;
    border: 8px solid ${theme.COLOR.ORANGE};
    border-radius: 24px;
    width: 250px;
    height: 250px;

    &:hover {
      box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);
    }
  }
`;

export { Container, Title, ResultImg, ContentWrapper, ContentBox, SeletedWrapper, ApparelWrapper };
