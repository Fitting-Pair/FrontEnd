import * as S from "./Submit.style";

const Submit = ({ text, half }) => {
  return <S.Container $half={half}>{text}</S.Container>;
};

export default Submit;
