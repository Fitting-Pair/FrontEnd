import * as S from "./MyPage.style";
import Logo from "../../assets/images/Logo-black.png";
import MoblieIcon from "../../components/Icon/MobileIcon/MoblieIcon";
import ResultPaper from "../../components/ResultPaper/ResultPaper";
import { result } from "../../constants/result";
import SwiperComponent from "../../components/SwiperComponent/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const nav = useNavigate();
  return (
    <S.Container>
      <MoblieIcon text="MYPAGE" noBack={true} />
      <S.MyResultTitle>
        PREVIOUS <br />
        RESULT
      </S.MyResultTitle>
      <S.PreviousResultWrapper>
        <SwiperComponent>
          {result.map((e) => (
            <SwiperSlide key={e.id}>
              <S.PreviousData onClick={() => nav(`/my-page/result/${e.id}`)}>
                <ResultPaper result={e} />
              </S.PreviousData>
              <S.MyPageDate>{e.date}</S.MyPageDate>
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </S.PreviousResultWrapper>

      <S.BlackLogo src={Logo} />
    </S.Container>
  );
};

export default MyPage;
