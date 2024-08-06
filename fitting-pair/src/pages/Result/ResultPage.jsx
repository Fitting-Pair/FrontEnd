import * as S from "./ResultPage.style";
import topImg from "../../assets/images/top.png";
import resultImg from "../../assets/images/result.png";
import { Icon } from "../../components";
import { apparel } from "../../constants/apparel";
import PersonalCloth from "../../components/PersonalCloth/PersonalCloth";
import ApparelComponent from "../../components/ApparelComponent/ApparelComponent";
import { SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbars";


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
          <S.Category>TOP</S.Category>
          <S.Slider>
            <ApparelComponent>
              {apparel.map((e) => (
                <SwiperSlide>
                    <PersonalCloth apparel={e} />
                </SwiperSlide>
              ))}
            </ApparelComponent>
          </S.Slider>
        </S.ClothWrapper>

        <S.ClothWrapper>          
          <S.Category>BOTTOM</S.Category>
          <S.Slider>
            <ApparelComponent>
              {apparel.map((e) => (
                <SwiperSlide>
                    <PersonalCloth apparel={e} />
                </SwiperSlide>
              ))}
            </ApparelComponent>
          </S.Slider>
        </S.ClothWrapper>

        <S.Button onClick={() => nav("/body-check/styling/result")}>Generate</S.Button>
      </S.ContentResultContainer>
    </S.Container>
  );
};

export default ResultPage;
