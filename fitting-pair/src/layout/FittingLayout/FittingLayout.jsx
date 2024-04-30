import { Outlet } from "react-router-dom";
import * as S from "./FittingLayout.style";

const FittingLayout = () => {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
};

export default FittingLayout;
