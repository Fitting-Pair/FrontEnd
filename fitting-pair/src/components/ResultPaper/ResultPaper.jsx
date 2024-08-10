import * as S from './ResultPaper.style';
import resultImg from '../../assets/images/result.png';

const ResultPaper = ({ result }) => {
	const { cloth, text } = result;
	return (
		<S.Container>
			<S.ResultWrapper>
				<S.ResultTitle>
					YOU ARE <span>SQUARE</span> BODY.
				</S.ResultTitle>
				<S.BodyImg>
					<img src={resultImg} />
				</S.BodyImg>
				<S.ResultExplainWrapper>
					{text.map((e, idx) => (
						<S.ContentWrapper key={idx}>
							<span>{e.title}</span>
							<p>{e.content.substring(0, 200)}</p>
						</S.ContentWrapper>
					))}
				</S.ResultExplainWrapper>
				<S.ClothWrapper>
					<span>SELECTED APPAREL</span>
					<section>
						{cloth.map(e => (
							<div key={e.id}>
								<img src={e.image} />
							</div>
						))}
					</section>
				</S.ClothWrapper>
			</S.ResultWrapper>
		</S.Container>
	);
};

export default ResultPaper;
