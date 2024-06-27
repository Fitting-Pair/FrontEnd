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

  span {
    color: #000;
  }
`;

const ContentMyPageContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
`

const LogoutWrapper = styled.div`

  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 40px;
    margin-right: 40px;

    @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) {
      margin-top: 70px;
    }

    @media only screen and (min-device-width: 768px) and (max-device-width: 1023px) {
      margin-top: 55px;
    }

`

const LogoutIcon = styled.div`

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) {
    width: 50px;
    height: 50px;
    margin-top: 50px;
    margin-right: 50px;

    img {
      width: 23px;
    }
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1023px) {
    width: 30px;
    height: 30px;
    margintop: 30px;
    marginright: 30px;

    img {
      width: 16px;
    }

`

const MyResultWrapper = styled.div`

`

const Swiper = styled.div`
  width: 100%;
  height: 100%;
`

const SwiperSlide = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
`

const MyPageDate = styled.div`
  ${theme.ALIGN.COLUMN_LEFT};
  color: #fff;
  width: 530px;
  margin-left: 30px;
  margin-top: 15px;

  font-family: ${theme.FONT.ROBOTO_BOLD};
  
`

const BlackLogo = styled.img`
  ${theme.ALIGN.COLUMN_CENTER};

  margin-bottom: 50px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 90%;

`

export { Container, ContentMyPageContainer, LogoutWrapper, LogoutIcon, MyResultWrapper, MyResultTitle, Swiper, SwiperSlide, MyPageDate, BlackLogo };

