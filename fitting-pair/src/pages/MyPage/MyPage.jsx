import * as S from "./MyPage.style";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import Logout from "../../assets/images/logout.png"
import Logo from "../../assets/images/FITTINGPAIR-black.png"

// 모바일 myPage
const MyPage = () => {
  const nav = useNavigate();

  return (
    <S.Container>
      <S.ContentMyPageContainer>
        <span>MyPage</span>

        <S.LogoutWrapper>
            <S.LogoutIcon>
              <img src={Logout} />
            </S.LogoutIcon>
        </S.LogoutWrapper>

        <S.MyResultWrapper>
          <S.MyResultTitle>
            PREVIOUS
            RESULT
          </S.MyResultTitle>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
          </Swiper>
        </S.MyResultWrapper>

        <S.MyPageDate>
            May, 13th
        </S.MyPageDate>
        
        <S.BlackLogo src={Logo} />
      </S.ContentMyPageContainer>
    </S.Container>
  );
};

export default MyPage;
