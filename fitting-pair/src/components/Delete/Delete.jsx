import * as S from './Delete.style';
import warning from '../../assets/images/warning.png';
import x from '../../assets/images/X.png';
import { useState } from 'react';
import Secession from '../../components/Secession/Secession';

const Delete = ({ isVisible, onClose }) => {
	if (!isVisible) return null;

	const [isDeleteVisible, setDeleteVisible] = useState(false);
	const [isSecessionVisible, setSecessionVisible] = useState(false);

	const openDelete = () => {
		setDeleteVisible(true);
	};
	const closeDelete = () => {
		setDeleteVisible(false);
	};
	const openSecession = () => {
		setSecessionVisible(true);
	}
	const closeSecession =() => {
		setSecessionVisible(false);
	}

	const handelDeleteAccount = () => {
		closeDelete();
		openSecession();
	}

	return (
		<S.DeleteOverlay>
			<S.DeleteContent>
				<S.CloseButton onClick={closeDelete}>
					<img src={x} />
				</S.CloseButton>
				<S.WarningWrapper>
					<img src={warning} />
				</S.WarningWrapper>
				<p>
					정말 회원 탈퇴를 진행하시겠습니까?
					<br /> 이후에는 되돌릴 수 없습니다.
				</p>
				<S.Button onClick={openSecession}>
					<div>탈퇴하기</div>
				</S.Button>
			<Secession isVisible={isSecessionVisible} onClose={closeSecession} />

			</S.DeleteContent>
		</S.DeleteOverlay>
	);
};

export default Delete;
