import * as S from './PersonalCloth.style';

const PersonalCloth = ({ cloth }) => {
	const { imageUrl } = cloth;
	return (
		<S.Wrap>
			<img src={imageUrl} />
		</S.Wrap>
	);
};

export default PersonalCloth;
