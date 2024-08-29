import * as S from './ResultPaper.style';

const ResultPaper = ({ result }) => {
	const {
		bodyTypeName,
		objFile,
		userStylingResponseDto,
		bodyTypeCareful,
		bodyTypeFeature,
	} = result;
	return (
		<S.Container>
			<S.ResultWrapper>
				<S.ResultTitle>
					당신은 <span>{bodyTypeName}</span> 체형입니다.
				</S.ResultTitle>
				<S.BodyImg>
					<img src={objFile} />
				</S.BodyImg>
				<S.ResultExplainWrapper>
					<S.ContentWrapper>
						<span>체형 특징</span>
						<p>{bodyTypeFeature.substring(0, 130)}</p>
					</S.ContentWrapper>
					<S.ContentWrapper>
						<span>코디 주의사항</span>
						<p>{bodyTypeCareful.substring(0, 130)}</p>
					</S.ContentWrapper>
				</S.ResultExplainWrapper>
				<S.ClothWrapper>
					<span>나만의 의류 리스트</span>
					<section>
						<div>
							<img src={userStylingResponseDto.userTopClothesDto.imageUrl} />
						</div>
						<div>
							<img
								src={userStylingResponseDto.userBottomClothesItemsDto.imageUrl}
							/>
						</div>
					</section>
				</S.ClothWrapper>
			</S.ResultWrapper>
		</S.Container>
	);
};

export default ResultPaper;
