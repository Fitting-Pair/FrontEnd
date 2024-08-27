import * as S from './ResultPage.style';
import resultImg from '../../assets/images/result.png';
import { Error, Icon, Loading } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import useLoadingStore from '../../store/useLoadingStore';
import { useEffect, useState } from 'react';
import { getBodyCheckResult } from '../../api';
import PersonalCloth from '../../components/PersonalCloth/PersonalCloth';
import ApparelComponent from '../../components/ApparelComponent/ApparelComponent';
import { SwiperSlide } from 'swiper/react';
import { PAGE_PATH } from '../../constants';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// styling 페이지
const ResultPage = () => {
	const nav = useNavigate();
	const { imgId } = useParams();
	const { loading, setLoading } = useLoadingStore(state => state);
	const [result, setResult] = useState(null);

	const fetchResult = async () => {
		try {
			const data = await getBodyCheckResult(imgId);

			return data;
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		const timer = setTimeout(
			async () => {
				const data = await fetchResult();
				setResult(data?.data);
				setLoading(false);
			},
			1000 * 60 * 3,
		);

		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Loading text={'분석중 ...'} />;
	} else if (!loading && result) {
		return (
			<S.Container>
				<Icon blackNum={2} />

				<S.ContentResultContainer>
					<S.ResultWrapper>
						<S.ResultTitle>
							YOU ARE <span>{result.bodyTypeName}</span> BODY.
						</S.ResultTitle>
						<S.ResultImg>
							<img src={resultImg} />
						</S.ResultImg>
						<S.ResultExplainWrapper>
							<S.ContentWrapper>
								<span>체형 특징</span>
								<p>{result.bodyTypeFeature}</p>
							</S.ContentWrapper>
							<S.ContentWrapper>
								<span>코디 주의사항</span>
								<p>{result.bodyTypeCareful}</p>
							</S.ContentWrapper>
						</S.ResultExplainWrapper>
					</S.ResultWrapper>

					<S.ClothWrapper>
						<S.Category>상의</S.Category>
						<S.Slider>
							<ApparelComponent>
								{result.clothesDto.topClothesItems.map((e, idx) => (
									<SwiperSlide key={idx}>
										<PersonalCloth cloth={e} />
									</SwiperSlide>
								))}
							</ApparelComponent>
						</S.Slider>
					</S.ClothWrapper>
					<S.ClothWrapper>
						<S.Category>하의</S.Category>
						<S.Slider>
							<ApparelComponent>
								{result.clothesDto.bottomClothesItems.map((e, idx) => (
									<SwiperSlide key={idx}>
										<PersonalCloth cloth={e} />
									</SwiperSlide>
								))}
							</ApparelComponent>
						</S.Slider>
					</S.ClothWrapper>

					<S.Button
						onClick={() =>
							nav(
								`/${PAGE_PATH.BODY_CHECK}/${PAGE_PATH.STYLEING}/${PAGE_PATH.RESULT}`,
							)
						}
					>
						Generate
					</S.Button>
				</S.ContentResultContainer>
			</S.Container>
		);
	} else {
		return <Error />;
	}
};

export default ResultPage;
