import * as S from "./Submit.style";
import { useNavigate } from "react-router-dom";

const Submit = ({ text, width, login }) => {
  const nav = useNavigate();

  const handleClick = () => {
    if (window.innerWidth <= 600) {
      // 모바일
      nav("/my-page");
    } else {
      nav("/body-check");
    }
  };

  return (
    <S.Container onClick={handleClick} width={width} $login={login}>
      {text}
    </S.Container>
  );
};

export default Submit;
