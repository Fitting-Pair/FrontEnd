import { Outlet, useLocation } from "react-router-dom";
import * as S from "./FittingLayout.style";
import useAuth from "../../hooks/useAuth";

const FittingLayout = () => {
  const { pathname } = useLocation();

  if (pathname === "/body-check") {
    useAuth();
  }

  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
};

export default FittingLayout;
