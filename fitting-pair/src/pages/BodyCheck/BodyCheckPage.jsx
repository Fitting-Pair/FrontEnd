import * as S from "./BodyCheckPage.style";
import checkImg from "../../assets/check.png";
import clothImg from "../../assets/cloth.png";
import penImg from "../../assets/pen.png";
import tipImg from "../../assets/tip.png";

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
      <S.Cam></S.Cam>
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
          <button>NEXT</button>
        </S.ContentWrapper>
      </S.TipWrapper>
    </S.Container>
  );
};

export default BodyCheckPage;
