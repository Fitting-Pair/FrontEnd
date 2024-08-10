import * as S from './BodyCheckPage.style';
import tipImg from '../../assets/images/tip.png';
import Webcam from '../../components/Webcam/Webcam';
import { Icon } from '../../components';

const BodyCheckPage = () => {
	return (
		<S.Container>
			<Icon blackNum={1} />
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
