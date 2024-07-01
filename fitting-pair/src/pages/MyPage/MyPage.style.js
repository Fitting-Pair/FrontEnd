import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 800px;
  height: 100%;
  overflow-x: hidden;
  background: linear-gradient(20deg, #b0cfb2, #f6ae7c);
`;

const MyResultTitle = styled.div`
  padding-top: 90px;
  ${theme.ALIGN.COLUMN_CENTER};
  font-family: ${theme.FONT.JIMHURIA_REGULAR};
  font-size: 128px;
  text-align: center;
  line-height: 70px;
`;

const BlackLogo = styled.img`
  position: absolute;
  bottom: 0;
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

export { Container, PreviousData, MyResultTitle, MyPageDate, BlackLogo, PreviousResultWrapper };
