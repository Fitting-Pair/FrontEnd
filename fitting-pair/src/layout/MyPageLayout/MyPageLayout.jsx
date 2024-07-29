import { Outlet } from "react-router-dom";
import * as S from "./MyPageLayout.style";
import useAuth from "../../hooks/useAuth";

const MyPageLayout = () => {
  useAuth();

  return (
    <S.Container>
      <S.OutletContainer>
        <Outlet />
      </S.OutletContainer>
    </S.Container>
  );
};

export default MyPageLayout;
