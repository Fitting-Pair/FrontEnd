import * as S from "./Submit.style";

const Submit = ({ text, width, login, onClick, onBlur, disabled }) => {
  return (
    <S.Container onClick={onClick} width={width} $login={login} type="submit" onBlur={onBlur} disabled={disabled}>
      {text}
    </S.Container>
  );
};

export default Submit;
