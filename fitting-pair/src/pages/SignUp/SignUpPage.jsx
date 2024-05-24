import Input from "../../components/Input/Input";
import * as S from "./SignUpPage.style";
import Icon from "../../assets/images/icon.png";
import Phone from "../../assets/images/phone.png";
import Ruler from "../../assets/images/ruler.png";
import Male from "../../assets/images/male.png";
import Female from "../../assets/images/female.png";
import SIGNUP from "../../assets/images/SIGNUP.png";
import Submit from "../../components/Button/Submit";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUpPage = () => {
  // const [userInput, setUserInput] = useState({
  //   userName: "",
  //   phoneNumber: "",
  //   userHeight: null,
  //   userGender: null,
  // });

  return (
    <S.Container>
      <S.Logo src={SIGNUP} />
      <Input text={"Nickname"} icon={Icon} half={false} />
      <Input text={"Phone"} icon={Phone} half={false} />

      <S.Wrapper>
        <S.ButtonBox>
          <div>
            <img src={Male} />
          </div>
          <hr />
          <div>
            <img src={Female} />
          </div>
        </S.ButtonBox>
        <Input text={"Height"} icon={Ruler} half={true} />
      </S.Wrapper>

      <Submit text={"SUBMIT"} width={"530px"} />
      <S.GoLogin>
        Do you have id ?<Link to="/login">Login</Link>
      </S.GoLogin>
    </S.Container>
  );
};

export default SignUpPage;
