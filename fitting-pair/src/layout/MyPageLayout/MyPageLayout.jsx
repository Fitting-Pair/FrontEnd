import { Outlet } from "react-router-dom";
import * as S from "./MyPageLayout.style";

const MyPageLayout = () => {
  return (
    <S.Container>
      <S.OutletContainer>
        <Outlet />
      </S.OutletContainer>
    </S.Container>
  );
};

export default MyPageLayout;
