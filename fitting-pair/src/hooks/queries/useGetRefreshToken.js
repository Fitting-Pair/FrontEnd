import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "../../api/user";
import { NUMBERS, QUERY_KEYS } from "../../constants";
import { useEffect } from "react";
import { removeHeader, setHeader } from "../../util";

const useGetRefreshToken = () => {
  const { data, isError, isSuccess } = useQuery({
    queryKey: [QUERY_KEYS.AUTH, QUERY_KEYS.GET_ACCESS_TOKEN],
    queryFn: getAccessToken,
    staleTime: NUMBERS.ACCESS_TOKEN_REFRESH_TIME,
    refetchInterval: NUMBERS.ACCESS_TOKEN_REFRESH_TIME,
    refetchOnReconnect: true, // 앱을 종료하지 않고, 다른 작업을 했다가 돌아와도 갱신
    refetchIntervalInBackground: true, // 다시 연결되거나 백그라운드에서 refetch
  });

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      localStorage.setItem("accessToken", data.data.accessToken);
      setHeader("Authorization", data.data.accessToken);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log("bb");
      removeHeader("Authorization");
      localStorage.clear();
    }
  }, [isError]);
};

export { useGetRefreshToken };
