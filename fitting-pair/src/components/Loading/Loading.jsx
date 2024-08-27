import * as S from './Loading.style';
import Spinning from '../../assets/images/spinning.webp';

const Loading = ({ text }) => {
	return (
		<S.Container>
			<S.LoadingText>{text}</S.LoadingText>
			<img src={Spinning} />
		</S.Container>
	);
};

export default Loading;
