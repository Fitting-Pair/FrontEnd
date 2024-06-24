import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const IconWrapper = styled.div`
  display: flex;
  font-size: 13px;

  margin: 20px 5px 95px 5px;
`;

const Icon = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 10px;
  height: 33px;
  background-color: white;
  border-radius: 20px;

  padding: 10px;
  margin: 6px;

  font-family: ${theme.FONT.ROBOTO_MEDIUM};

  img {
    margin-right: 10px;
    width: 13%;
  }

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) {
    font-size: 17px;
    width: 135px;
    height: 43px;
    border-radius: 50px;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1023px) {
    font-size: 15px;
    width: 110px;
    height: 37px;
    border-radius: 50px;
  }
`;

const IconBlack = styled(Icon)`
  width: 130px;

  color: white;
  background-color: black;

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) {
    width: 165px;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1023px) {
    width: 145px;
  }
`;

const TipIcon = styled(Icon)`
  font-family: ${theme.FONT.ROBOTO_MEDIUM};
  width: 80px;
  height: 31px;

  img {
    width: 22%;
  }

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) {
    font-size: 20px;
    width: 130px;
    height: 53px;
    margin-bottom: 30px;

    img {
      width: 23px;
    }
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1023px) {
    font-size: 15px;
    width: 95px;
    height: 40px;
    margin-bottom: 30px;

    img {
      width: 16px;
    }
  }
`;

const Cam = styled.div`
  width: 350px;
  height: 350px;
  background-color: #b5b5b5;
  border-radius: 50%;

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) {
    width: 600px;
    height: 600px;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1023px) {
    width: 500px;
    height: 500px;
  }
`;

const TipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 40px;
  margin-bottom: 100px;

  font-size: 12px;
  font-weight: 500;

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) {
    margin-top: 70px;
    font-size: 23px;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1023px) {
    margin-top: 55px;
    font-size: 15px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 10px;
  font-family: ${theme.FONT.INTER_REGULAR};

  span {
    text-align: center;
    margin-bottom: 10px;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
`;

export { Container, IconWrapper, Icon, IconBlack, TipIcon, Cam, ContentWrapper, TipWrapper, ContentContainer };
