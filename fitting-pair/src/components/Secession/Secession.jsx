import * as S from './Secession.style';
import check2 from '../../assets/images/check2.png';
import x from '../../assets/images/X.png';
import { useState } from 'react';
import { PAGE_PATH } from '../../constants';
import { useNavigate } from 'react-router-dom';
import Delete from '../../components/Delete/Delete';

const Secession = ({ isVisible, onClose }) => {

    const nav = useNavigate();

	const handleEdit = () => {
		nav(`${PAGE_PATH.BASE}/${PAGE_PATH.LOGIN}`);
	};

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
		<S.SecessionOverlay>
			<S.SecessionContent>
                <S.CloseButton onClick={closeSecession}>
					<img src={x} />
				</S.CloseButton>
				<S.CheckWrapper>
					<img src={check2} />
				</S.CheckWrapper>
				<p>
					회원 탈퇴에 성공하였습니다.
					<br /> 감사합니다.
				</p>
				<S.Button onClick={handleEdit}>
				    <div>홈으로 돌아가기</div>
				</S.Button>
                <Delete isVisible={isDeleteVisible} onClose={closeDelete} />
                <Secession isVisible={isSecessionVisible} onClose={closeSecession} />

			</S.SecessionContent>
		</S.SecessionOverlay>
	);
};

export default Secession;