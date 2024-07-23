import * as S from "./ResultPage.style";
import topImg from "../../assets/images/top.png";
import resultImg from "../../assets/images/result.png";
import { Icon } from "../../components";
import { apparel } from "../../constants/apparel";
import PersonalCloth from "../../components/PersonalCloth/PersonalCloth";
import SwiperComponent from "../../components/SwiperComponent/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
// import "./ResultPage.css";


// styling 페이지
const ResultPage = () => {
  const nav = useNavigate();

  return (
    <S.Container>
      <Icon blackNum={2} />

      <S.ContentResultContainer>
        <S.ResultWrapper>
          <S.ResultTitle>
            YOU ARE <span>SQUARE</span> BODY.
          </S.ResultTitle>
          <S.ResultImg>
            <img src={resultImg} />
          </S.ResultImg>
          <S.ResultExplainWrapper>
            <S.ContentWrapper>
              <span>FEATURES</span>
              <p>
                consectetur. Vestibulum sit facilisis purus orci commodo ornare. Donec fermentum urna sit sed est cras
                faucibus in et. Eget habitasse vitae in in dictum viverra velit. Lorem morbi massa neque massa
                adipiscing pharetra facilisi sagittis viverra. Aliquam nec volutpat nulla aenean. Sed sollicitudin odio
                felis imperdiet faucibus quis mattis porttitor. Duis vehicula aliquet dui nulla sagittis potenti purus
                dignissim. Lacus dictum eget pellentesque quis nunc lectus. Dignissim amet ultricies velit etiam aenean.
              </p>
            </S.ContentWrapper>
            <S.ContentWrapper>
              <span>FEATURES</span>
              <p>
                consectetur. Vestibulum sit facilisis purus orci commodo ornare. Donec fermentum urna sit sed est cras
                faucibus in et. Eget habitasse vitae in in dictum viverra velit. Lorem morbi massa neque massa
                adipiscing pharetra facilisi sagittis viverra. Aliquam nec volutpat nulla aenean. Sed sollicitudin odio
                felis imperdiet faucibus quis mattis porttitor. Duis vehicula aliquet dui nulla sagittis potenti purus
                dignissim. Lacus dictum eget pellentesque quis nunc lectus. Dignissim amet ultricies velit etiam aenean.
              </p>
            </S.ContentWrapper>
          </S.ResultExplainWrapper>
        </S.ResultWrapper>

        <S.ClothWrapper>

          <S.Category>OUTER</S.Category>

          <S.Slider>
            <SwiperComponent>
              {apparel.map((e) => (
                <SwiperSlide key={e.id}>
                    <PersonalCloth apparel={e} />
                </SwiperSlide>
              ))}
            </SwiperComponent>
          </S.Slider>

        </S.ClothWrapper>
        <S.Button onClick={() => nav("/body-check/styling/result")}>Generate</S.Button>
      </S.ContentResultContainer>
    </S.Container>
  );
};

export default ResultPage;
