import * as S from "./Homepage.style";
import LOGO from "../../assets/images/Logo.webp";
import START_IMG from "../../assets/images/start_logo.png";

const Homepage = () => {
  return (
    <S.Container>
      <S.LogoWrapper>
        <img src={LOGO} />
      </S.LogoWrapper>
      <S.Text>
        <p>
          This is a service that analyzes your body shape and <br />
          recommends clothing through CV and AI.
        </p>
      </S.Text>

      <button>
        START
        <img src={START_IMG} />
      </button>
    </S.Container>
  );
};

export default Homepage;
