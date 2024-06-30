import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 100%;
  height: 100%;
  background: linear-gradient(20deg, #b0cfb2, #f6ae7c);
`;

const MyResultTitle = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  font-family: ${theme.FONT.JIMHURIA_REGULAR};
  font-size: 128px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height:70px;
  border-radius: 16px;
  margin: 10px;
  margin-top: 30px;

  span {
    text-align: center;
    color: #000;
  }
`;

const ContentMyPageContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
`;

const MyPageWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 400px;
  height: 50px;
`;

const MyPage = styled.div`

  display: flex;

  margin: 10px 30px;
  font-size: 16px;
  font-family: ${theme.FONT.ROBOTO_MEDIUM};

  div {
    ${theme.ALIGN.COLUMN_CENTER};

    position: relative;
    top: 0.5px;
    left: 20px;
    width: 100px;
    height: 30px;
    background-color: white;
    margin: 0px 15px;
    border-radius: 24px;
    place-items: center;
    justify-content: center;
    align-items: center;
  }

  button {
    ${theme.ALIGN.COLUMN_CENTER};
    position: relative;
    top: 0.5px;
    left: 120px;
    width: 400px;
    margin-right: 10px;
    margin-left: 0px;
    border: none;
    width: 33px;
    height: 33px;
    background-color: white;
    border-radius: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      margin-left: 5px;
    }

`

const MyResultWrapper = styled.div`

`;

const MyPageDate = styled.div`
  ${theme.ALIGN.COLUMN_LEFT};
  font-family: ${theme.FONT.ROBOTO_MEDIUM};
  
  color: #fff;
  width: 400px;
  margin-left: 50px;
  margin-top: 15px;
  display: flex;
  justify-content: flex-start;

`;

const BlackLogo = styled.img`
  ${theme.ALIGN.COLUMN_CENTER};
  margin-top: 30px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 80%;

`;

const PreviousResultWrapper = styled.div`
    ${theme.ALIGN.COLUMN_CENTER};
    width: 360px;
    height: 450px;
    background-color: white;
    margin-top: 20px;
`;

export { Container, ContentMyPageContainer, MyPageWrapper, MyPage, MyResultWrapper, MyResultTitle, MyPageDate, BlackLogo, PreviousResultWrapper };

