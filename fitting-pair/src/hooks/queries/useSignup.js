import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api/user";
import { toast } from "sonner";
import { PAGE_PATH } from "../../constants";

const useSignup = () => {
  const nav = useNavigate();
  return useMutation({
    mutationFn: signup,
    onSuccess: () => {
      toast.success("회원가입이 완료되었습니다 !", {
        duration: 1200,
      });
      nav(`${PAGE_PATH.BASE}${PAGE_PATH.LOGIN}`, { replace: true });
    },
    throwOnError: (error) => Number(error.response?.status) >= 500,
  });
};

export { useSignup };
