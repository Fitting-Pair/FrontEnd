import { useLocation } from "react-router-dom";
import { MoblieIcon } from "../../../../components";
import * as S from "./ResultDetail.style";
import Logo from "../../../../assets/images/Logo-black.png";

const ResultDetail = () => {
  const { state } = useLocation();
  const { url, image } = state;

  const hanldeNav = () => {
    window.open(url);
  };

  return (
    <S.Container>
      <MoblieIcon text="PRODUCT" />
      <S.ContentWrapper>
        <S.Image>
          <img src={image} />
        </S.Image>
        <button onClick={hanldeNav}>무신사 바로가기</button>
      </S.ContentWrapper>
      <S.Logo>
        <img src={Logo} />
      </S.Logo>
    </S.Container>
  );
};

export default ResultDetail;
