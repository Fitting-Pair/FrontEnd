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
  margin-top: 40px;

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
  font-family: ${theme.FONT.ROBOTO_MEDIUM};
  ${theme.ALIGN.COLUMN_CENTER};

  width: 100px;
  height: 31px; 
  border-radius: 24px;

  margin-top: 100px;

  background-color: white;

`;

const LogoutIcon = styled.div`

  button {
    ${theme.ALIGN.COLUMN_RIGHT};
    width: 400px;
    margin-right: 10px;
    margin-top: 20px;
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

`;

const MyResultWrapper = styled.div`

`;

const MyPageDate = styled.div`
  ${theme.ALIGN.COLUMN_LEFT};
  font-family: ${theme.FONT.ROBOTO_MEDIUM};
  
  color: #fff;
  width: 400px;
  margin-left: 10px;
  margin-top: 25px;
  display: flex;
  justify-content: flex-start;

`;

const BlackLogo = styled.img`
  ${theme.ALIGN.COLUMN_CENTER};

  margin-bottom: 50px;
  margin-top: 30px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 80%;

`;

const PreviousResultWrapper = styled.div`
    ${theme.ALIGN.COLUMN_CENTER};
    width: 400px;
    height: 400px;
    background-color: white;
    margin-top: 30px;
`;

export { Container, ContentMyPageContainer, MyPageWrapper, LogoutIcon, MyResultWrapper, MyResultTitle, MyPageDate, BlackLogo, PreviousResultWrapper };

