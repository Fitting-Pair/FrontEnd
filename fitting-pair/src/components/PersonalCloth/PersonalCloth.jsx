import Icon from "../Icon/Icon";
import * as S from "./PersonalCloth.style";
import resultImg from "../../assets/images/result.png";
import topImg from "../../assets/images/top.png";
import { apparel } from "../../constants/apparel";

const PersonalCloth = ({ apparel }) => {
  const { cloth } = apparel;
  return (
        <S.ImageBox>
            {cloth.map((e) => (
              <S.Wrap key={e.id}>
                <img 
                src={e.image} />
              </S.Wrap>
            ))}
        </S.ImageBox>
  );
};

export default PersonalCloth;
