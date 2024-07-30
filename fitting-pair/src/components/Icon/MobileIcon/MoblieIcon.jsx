import * as S from "./MovblieIcon.style";
import { FaArrowLeft } from "react-icons/fa6";
import LogOut from "../../../assets/images/door.png";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../../api/user";
import { toast } from "sonner";
import { removeHeader } from "../../../util";

const MoblieIcon = ({ text, noBack }) => {
  const nav = useNavigate();

  const { mutate } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("로그아웃 되셨습니다.", {
        duration: 1200,
      });
      localStorage.clear();
      removeHeader("Authorization");
      removeHeader("Refresh");

      nav("/", { replace: true });
    },
    onError: (error) => {
      console.log(error);
      error.response &&
        toast.error(error.response.data.message, {
          style: {
            color: "#fff",
            background: "#e05151",
          },
        });
    },
  });

  const handleLogout = () => {
    mutate({});
  };

  return (
    <S.Container>
      {noBack ? <span></span> : <FaArrowLeft onClick={() => nav(-1)} />}
      <div>{text}</div>
      <img src={LogOut} onClick={handleLogout} />
    </S.Container>
  );
};

export default MoblieIcon;
