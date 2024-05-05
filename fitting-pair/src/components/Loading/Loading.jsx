import * as S from "./Loading.style";
import Spinning from "../../assets/spinning.png";

const Loading = () => {
  return (
    <S.Container>
      <S.LoadingText>Analysing...</S.LoadingText>
      <img src={Spinning} />
    </S.Container>
  );
};

export default Loading;
