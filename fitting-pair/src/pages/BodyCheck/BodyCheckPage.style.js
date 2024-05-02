import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  font-size: 13px;

  margin: 20px 5px 95px 5px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 33px;
  background-color: white;
  border-radius: 20px;

  padding: 10px;
  margin: 6px;

  font-weight: bold;

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

  span {
    text-align: center;
    margin-bottom: 10px;
  }

  button {
    width: 70px;
    height: 35px;
    margin-top: 10px;
    border: none;
    border-radius: 25px;
    background-color: #7c9c80;
    color: white;
    font-weight: bold;
    font-size: 12px;
    box-shadow: 0px 6px 20px -8px rgba(0, 0, 0, 0.5);

    @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) {
      width: 120px;
      height: 55px;
      margin-top: 50px;
      font-size: 20px;
      border-radius: 40px;
    }

    @media only screen and (min-device-width: 768px) and (max-device-width: 1023px) {
      width: 95px;
      height: 42px;
      margin-top: 35px;
      font-size: 15px;
      border-radius: 40px;
    }
  }
`;

export { Container, IconWrapper, Icon, IconBlack, TipIcon, Cam, ContentWrapper, TipWrapper };
