import { Outlet } from "react-router-dom";
import * as S from "./StylingLayout.style";

const StylingLayout = () => {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
};

export default StylingLayout;
