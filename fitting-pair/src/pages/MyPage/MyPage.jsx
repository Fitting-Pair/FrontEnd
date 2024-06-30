import * as S from "./MyPage.style";

// import required modules
import { useNavigate } from "react-router-dom";
import Logout from "../../assets/images/logout.png"
import Logo from "../../assets/images/FITTINGPAIR-black.png"

// 모바일 myPage
const MyPage = () => {
  const nav = useNavigate();

  return (
    <S.Container>
      <S.ContentMyPageContainer>
        <S.MyPageWrapper>
          <S.MyPage>
            <div style={{ alignSelf: 'center' }}>
              MYPAGE
            </div>
              <button onClick={MyPage}>
                <img src={Logout} />
              </button>
          </S.MyPage>
        </S.MyPageWrapper>

        <S.MyResultWrapper>
          <S.MyResultTitle>
            PREVIOUS <br />
            RESULT
          </S.MyResultTitle>
        </S.MyResultWrapper>

        <S.PreviousResultWrapper>

        </S.PreviousResultWrapper>

        <S.MyPageDate>
            May, 13th
        </S.MyPageDate>
        
        <S.BlackLogo src={Logo} />
      </S.ContentMyPageContainer>
    </S.Container>
  );
};

export default MyPage;
