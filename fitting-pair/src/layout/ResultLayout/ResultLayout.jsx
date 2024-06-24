import { Outlet } from "react-router-dom";
import * as S from "./StylingLayout.style";

const ResultLayout = () => {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
};

export default ResultLayout;
