import * as S from "./MyPage.style";
import Logo from "../../assets/images/Logo-black.png";
import MoblieIcon from "../../components/Icon/MobileIcon/MoblieIcon";

const MyPage = () => {
  return (
    <S.Container>
      <MoblieIcon text="MYPAGE" noBack={true} />
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
