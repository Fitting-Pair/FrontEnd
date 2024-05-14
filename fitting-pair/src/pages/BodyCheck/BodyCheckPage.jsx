import * as S from "./BodyCheckPage.style";
import checkImg from "../../assets/images/check.png";
import clothImg from "../../assets/images/cloth.png";
import penImg from "../../assets/images/pen.png";
import tipImg from "../../assets/images/tip.png";
import Webcam from "../../components/Webcam/Webcam";

const BodyCheckPage = () => {
  return (
    <S.Container>
      <S.IconWrapper>
        <S.IconBlack>
          <img src={penImg} />
          Body Check
        </S.IconBlack>
        <S.Icon>
          <img src={clothImg} />
          Styling
        </S.Icon>
        <S.Icon>
          <img src={checkImg} />
          Result
        </S.Icon>
      </S.IconWrapper>
      <S.ContentContainer>
        <Webcam />
        <S.TipWrapper>
          <S.TipIcon>
            <img src={tipImg} />
            Tips
          </S.TipIcon>
          <S.ContentWrapper>
            <span>
              You can get more accurate results
              <br /> by uploading photos that meet the criteria below.
            </span>
            <li>Photo taken from the front</li>
            <li>Expressionless photo without smiling</li>
            <li>A photo where the forehead is clearly visible</li>
            <li>photo without glasses</li>
          </S.ContentWrapper>
        </S.TipWrapper>
      </S.ContentContainer>
    </S.Container>
  );
};

export default BodyCheckPage;
