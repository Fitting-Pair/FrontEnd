import Input from "../../components/Input/Input";
import * as S from "./SignUpPage.style";
import Icon from "../../assets/images/icon.png";
import Phone from "../../assets/images/phone.png";
import Ruler from "../../assets/images/ruler.png";
import SIGNUP from "../../assets/images/SIGNUP.png";
import Submit from "../../components/Button/Submit";
import { Link } from "react-router-dom";
import MFButton from "../../components/Button/MFButton/MFButton";
import useForm from "../../hooks/useForm";

const SignUpPage = () => {
  const signup = useForm({
    initialValue: {
      userName: "",
      phoneNumber: "",
      userHeight: "",
      userGender: "",
    },
  });

  // console.log(signup.values);

  return (
    <S.Container>
      <S.Logo src={SIGNUP} />
      <Input text={"Nickname"} icon={Icon} half={false} signup={signup} />
      <Input text={"Phone"} icon={Phone} half={false} signup={signup} />
      <S.Wrapper>
        <S.ButtonBox>
          <MFButton male={true} signup={signup} />
          <hr />
          <MFButton signup={signup} />
        </S.ButtonBox>
        <Input text={"Height"} icon={Ruler} half={true} signup={signup} />
      </S.Wrapper>

      <Submit text={"SUBMIT"} width={"530px"} />

      <S.GoLogin>
        Do you have id ?<Link to="/login">Login</Link>
      </S.GoLogin>
    </S.Container>
  );
};

export default SignUpPage;
