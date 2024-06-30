import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(20deg, #b0cfb2, #f6ae7c);
  overflow: hidden;
`;

const MyPageWrapper = styled.div`
  width: 100%;
  position: relative;
  top: 25px;
  display: flex;
  justify-content: space-around;
  font-size: 16px;
  font-family: ${theme.FONT.ROBOTO_MEDIUM};

  span {
    width: 28px;
    height: 30px;
  }

  div {
    ${theme.ALIGN.ROW_CENTER};
    width: 100px;
    height: 30px;
    background-color: white;
    margin: 0px 15px;
    border-radius: 24px;
  }

  img {
    background-color: white;
    border-radius: 50%;
    padding: 8px;
  }
`;

const MyResultTitle = styled.div`
  padding-top: 60px;
  ${theme.ALIGN.COLUMN_CENTER};
  font-family: ${theme.FONT.JIMHURIA_REGULAR};
  font-size: 128px;
  text-align: center;
  line-height: 70px;
`;

const BlackLogo = styled.img`
  position: fixed;
  bottom: -10px;
  @media (max-height: 740px) {
    bottom: -30px;
    width: 90%;
  }
`;

const PreviousResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 50%;
`;

const PreviousData = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  margin-top: 20px;
`;

const MyPageDate = styled.div`
  padding-top: 10px;
  width: 100%;
  font-family: ${theme.FONT.ROBOTO_MEDIUM};
  color: #fff;
`;

export { Container, PreviousData, MyPageWrapper, MyResultTitle, MyPageDate, BlackLogo, PreviousResultWrapper };
