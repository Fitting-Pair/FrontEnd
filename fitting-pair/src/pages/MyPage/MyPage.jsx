import * as S from './MyPage.style';
import Logo from '../../assets/images/Logo-black.png';
import MoblieIcon from '../../components/Icon/MobileIcon/MoblieIcon';
import ResultPaper from '../../components/ResultPaper/ResultPaper';
import SwiperComponent from '../../components/SwiperComponent/SwiperComponent';
import { SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import useGetAllResult from '../../hooks/queries/results/useGetAllResult';
import Loading from '../../components/Loading/Loading';

const MyPage = () => {
	const nav = useNavigate();
	const { data, isPending } = useGetAllResult();
	console.log(data);

	let content;

	if (isPending) {
		content = (
			<S.LoadingBox>
				<Loading text={'불러오는 중...'} />
			</S.LoadingBox>
		);
	}

	if (data) {
		content = (
			<S.PreviousResultWrapper>
				<SwiperComponent>
					{data?.map(e => (
						<SwiperSlide key={e.id}>
							<S.PreviousData
								onClick={() =>
									nav(`/my-page/result/${e.id}`, { state: { ...e } })
								}
							>
								<ResultPaper result={e} />
							</S.PreviousData>
							<S.MyPageDate>{'April,10th'}</S.MyPageDate>
						</SwiperSlide>
					))}
				</SwiperComponent>
			</S.PreviousResultWrapper>
		);
	}

	return (
		<S.Container>
			<MoblieIcon text="MYPAGE" noBack={true} />
			<S.MyResultTitle>
				PREVIOUS <br />
				RESULT
			</S.MyResultTitle>
			{content}
			<S.BlackLogo src={Logo} />
		</S.Container>
	);
};

export default MyPage;
