import * as S from "./LoginPage.style";
import LOGO from "../../assets/images/Logo.webp";
import { Submit } from "../../components";
import Icon from "../../assets/images/icon.png";
import useForm from "../../hooks/useForm";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/user";
import { useNavigate } from "react-router-dom";
import { validatePhoneNumber, setHeader } from "../../util";

const LoginPage = () => {
  const nav = useNavigate();

  const loginForm = useForm({
    initialValue: {
      phoneNumber: "",
    },
    validate: validatePhoneNumber,
  });

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setHeader("Authorization", data.data.accessToken);
      nav("/body-check");
    },
  });

  const handleSubmit = () => {
    mutate({
      phoneNumber: loginForm.values.phoneNumber.replace(/-/g, ""),
    });
  };

  return (
    <S.Container>
      <S.LogoWrapper>
        <img src={LOGO} />
      </S.LogoWrapper>

      <S.Wrapper onSubmit={(e) => e.preventDefault()}>
        <S.InputBox>
          <img src={Icon} />
          <input placeholder="Phone" {...loginForm.getPhoneNumInputProps("phoneNumber")} maxLength={13} />
        </S.InputBox>
        {loginForm.errors.phoneNumber && loginForm.touched.phoneNumber && (
          <S.ErrorMeg>{loginForm.errors.phoneNumber}</S.ErrorMeg>
        )}
        <Submit
          text={"Login"}
          width={"268px"}
          login={true}
          onClick={handleSubmit}
          disabled={loginForm.errors.phoneNumber !== ""}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default LoginPage;
