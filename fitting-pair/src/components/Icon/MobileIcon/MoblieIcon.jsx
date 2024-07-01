import * as S from "./MovblieIcon.style";
import { FaArrowLeft } from "react-icons/fa6";
import LogOut from "../../../assets/images/door.png";
import { useNavigate } from "react-router-dom";

const MoblieIcon = ({ text, noBack }) => {
  const navigation = useNavigate();
  const handleLogout = () => {
    // 로그아웃 로직
    console.log("로그아웃");
    navigation("/", { replace: true });
  };

  return (
    <S.Container>
      {noBack ? <span></span> : <FaArrowLeft onClick={() => navigation(-1)} />}
      <div>{text}</div>
      <img src={LogOut} onClick={handleLogout} />
    </S.Container>
  );
};

export default MoblieIcon;
