import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/user";
import { toast } from "sonner";
import { setHeader, setRefresh } from "../../util";
import { PAGE_PATH } from "../../constants";

const useLogin = () => {
  const nav = useNavigate();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      toast.success("로그인 완료 !", {
        duration: 1200,
      });
      setHeader("Authorization", data.data.accessToken);
      setRefresh("Refresh", data.data.refreshToken);
      if (window.innerWidth <= 600) {
        // 모바일
        nav(`${PAGE_PATH.MY_PAGE}`);
      } else {
        nav(`${PAGE_PATH.BODY_CHECK}`);
      }
    },
    throwOnError: (error) => Number(error.response?.status) >= 500,
  });
};

export { useLogin };
