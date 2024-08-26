import * as S from './ResultPage.style';
import topImg from '../../assets/images/top.png';
import resultImg from '../../assets/images/result.png';
import { Icon, Loading } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import useLoadingStore from '../../store/useLoadingStore';
import { useEffect, useState } from 'react';
import { getBodyCheckResult } from '../../api';

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
			1000 * 60 * 2.5,
		);

		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Loading />;
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
						<span>OUTER</span>
						<section>
							<div>
								<img src={topImg} />
							</div>
							<div>
								<img src={topImg} />
							</div>
							<div>
								<img src={topImg} />
							</div>
							<div>
								<img src={topImg} />
							</div>
						</section>
					</S.ClothWrapper>
					<S.ClothWrapper>
						<span>TOP</span>
						<section>
							<div>
								<img src={topImg} />
							</div>
							<div>
								<img src={topImg} />
							</div>
							<div>
								<img src={topImg} />
							</div>
							<div>
								<img src={topImg} />
							</div>
						</section>
					</S.ClothWrapper>
					<S.ClothWrapper>
						<span>BOTTOM</span>
						<section>
							<div>
								<img src={topImg} />
							</div>
							<div>
								<img src={topImg} />
							</div>
							<div>
								<img src={topImg} />
							</div>
							<div>
								<img src={topImg} />
							</div>
						</section>
					</S.ClothWrapper>
					<S.Button onClick={() => nav('/body-check/styling/result')}>
						Generate
					</S.Button>
				</S.ContentResultContainer>
			</S.Container>
		);
	} else {
		return <S.Container>오류발생</S.Container>;
	}
};

export default ResultPage;
