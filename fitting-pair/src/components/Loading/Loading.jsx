import * as S from "./Loading.style";
import Spinning from "../../assets/images/spinning.png";

const Loading = () => {
  return (
    <S.Container>
      <S.LoadingText>Analysing...</S.LoadingText>
      <img src={Spinning} />
    </S.Container>
  );
};

export default Loading;
