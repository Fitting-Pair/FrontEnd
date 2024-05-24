import * as S from "./Input.style";

const Input = ({ text, icon, half }) => {
  return (
    <S.Container $half={half}>
      <input placeholder={text} />
      <img src={icon} />
    </S.Container>
  );
};

export default Input;
