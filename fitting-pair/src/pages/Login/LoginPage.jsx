import * as S from "./LoginPage.style";
import LOGO from "../../assets/images/Logo.webp";
import { Submit } from "../../components";
import Icon from "../../assets/images/icon.png";
import useForm from "../../hooks/useForm";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/user";
import { useNavigate } from "react-router-dom";
import { validatePhoneNumber, setHeader } from "../../util";
import { toast } from "sonner";

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
      toast.success("로그인 완료 !", {
        duration: 1200,
      });
      setHeader("Authorization", data.data.accessToken);
      if (window.innerWidth <= 600) {
        // 모바일
        nav("/my-page");
      } else {
        nav("/body-check");
      }
    },
    onError: (error) => {
      error.response &&
        toast.error(error.response.data.message, {
          style: {
            color: "#fff",
            background: "#e05151",
          },
          duration: 1200,
        });
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
