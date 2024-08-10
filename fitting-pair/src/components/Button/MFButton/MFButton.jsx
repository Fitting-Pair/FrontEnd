import * as S from './MFButton.style';
import { MdMale, MdFemale } from 'react-icons/md';

const MFButton = ({ male, signup }) => {
	const gender = male ? 'male' : 'female';
	const { onClick, selected } = signup.getGenderButtonProps(gender);

	return (
		<S.Container
			type="button"
			onClick={onClick}
			$selected={selected}
			$male={male}
		>
			{male ? <MdMale /> : <MdFemale />}
		</S.Container>
	);
};

export default MFButton;
