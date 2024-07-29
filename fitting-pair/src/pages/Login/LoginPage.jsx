import * as S from "./LoginPage.style";
import LOGO from "../../assets/images/Logo.webp";
import { Submit } from "../../components";
import Icon from "../../assets/images/icon.png";
import useForm from "../../hooks/useForm";
import { validatePhoneNumber } from "../../util";
import { toast } from "sonner";
import { useLogin } from "../../hooks/queries/useLogin";
import { useGetRefreshToken } from "../../hooks/queries/useGetRefreshToken";

const LoginPage = () => {
  const loginForm = useForm({
    initialValue: {
      phoneNumber: "",
    },
    validate: validatePhoneNumber,
  });

  const { mutate } = useLogin();
  useGetRefreshToken();

  const handleSubmit = () => {
    mutate(
      {
        phoneNumber: loginForm.values.phoneNumber.replace(/-/g, ""),
      },
      {
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
      },
    );
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
