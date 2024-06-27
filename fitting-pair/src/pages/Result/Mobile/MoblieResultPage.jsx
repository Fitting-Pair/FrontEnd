import * as S from "./MoblieResultPage.style";
import { MoblieIcon } from "../../../components";
import resultImg from "../../../assets/images/result.png";
import { textResult, SelectedApparel } from "../../../constants/result";
import { useNavigate } from "react-router-dom";

const MoblieResultPage = () => {
  const nav = useNavigate();
  const date = "MAY, 13TH";

  return (
    <S.Container>
      <MoblieIcon text={date} />
      <S.Title>
        OOO, YOU ARE <span>SQUARE</span> BODY.
      </S.Title>
      <S.ResultImg src={resultImg} />
      <S.ContentWrapper>
        {textResult.map((e, idx) => (
          <S.ContentBox key={idx}>
            <div>{e.title}</div>
            <span>{e.content}</span>
          </S.ContentBox>
        ))}
      </S.ContentWrapper>
      <S.SeletedWrapper>
        <h1>SELECTED APPAREL</h1>
        <S.ApparelWrapper>
          {SelectedApparel.map((e) => (
            <img src={e.image} key={e.id} onClick={() => nav(`/my-page/result/detail/${e.id}`, { state: { ...e } })} />
          ))}
        </S.ApparelWrapper>
      </S.SeletedWrapper>
    </S.Container>
  );
};

export default MoblieResultPage;
