import { useLocation } from 'react-router-dom';
import { MoblieIcon } from '../../../../components';
import * as S from './ResultDetail.style';
import Logo from '../../../../assets/images/Logo-black.png';
import { useEffect } from 'react';

const ResultDetail = () => {
	const { state } = useLocation();
	console.log(state);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const hanldeNav = () => {
		window.open(state.siteUrl);
	};

	return (
		<S.Container>
			<MoblieIcon text="PRODUCT" />
			<S.ContentWrapper>
				<S.Image src={state.imageUrl} />
				<button onClick={hanldeNav}>무신사 바로가기</button>
			</S.ContentWrapper>
			<S.Logo>
				<img src={Logo} />
			</S.Logo>
		</S.Container>
	);
};

export default ResultDetail;
