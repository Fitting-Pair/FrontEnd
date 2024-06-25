import * as S from "./LoginPage.style";
import LOGO from "../../assets/images/Logo.webp";
import { Submit } from "../../components";
import Icon from "../../assets/images/icon.png";
import useForm from "../../hooks/useForm";

const LoginPage = () => {
  const login = useForm({
    initialValue: {
      phoneNumber: "",
    },
  });

  console.log(login.values);
  return (
    <S.Container>
      <S.LogoWrapper>
        <img src={LOGO} />
      </S.LogoWrapper>

      <S.Wrapper>
        <S.InputBox>
          <img src={Icon} />
          <input placeholder="Phone" {...login.getPhoneNumInputProps("phoneNumber")} maxLength={13} />
        </S.InputBox>
        <Submit text={"Login"} width={"268px"} login={true} />
      </S.Wrapper>
    </S.Container>
  );
};

export default LoginPage;
