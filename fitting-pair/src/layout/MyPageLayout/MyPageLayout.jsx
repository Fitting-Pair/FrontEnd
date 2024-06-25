import { Outlet } from "react-router-dom";
import * as S from "./MyPageLayout.style";

const MyPageLayout = () => {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
};

export default MyPageLayout;
