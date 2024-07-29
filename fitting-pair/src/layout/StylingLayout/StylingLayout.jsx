import { Outlet, useNavigate } from "react-router-dom";
import * as S from "./StylingLayout.style";
import useAuth from "../../hooks/useAuth";

const StylingLayout = () => {
  useAuth();

  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
};

export default StylingLayout;
