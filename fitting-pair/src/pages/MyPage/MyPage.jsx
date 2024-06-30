import * as S from "./MyPage.style";
import Logout from "../../assets/images/logout.png";
import Logo from "../../assets/images/FITTINGPAIR-black.png";

const MyPage = () => {
  return (
    <S.Container>
      <S.MyPageWrapper>
        <span></span>
        <div>MYPAGE</div>
        <img src={Logout} />
      </S.MyPageWrapper>
      <S.MyResultTitle>
        PREVIOUS <br />
        RESULT
      </S.MyResultTitle>
      <S.PreviousResultWrapper>
        <S.PreviousData />
        <S.MyPageDate>May, 13th</S.MyPageDate>
      </S.PreviousResultWrapper>
      <S.BlackLogo src={Logo} />
    </S.Container>
  );
};

export default MyPage;
