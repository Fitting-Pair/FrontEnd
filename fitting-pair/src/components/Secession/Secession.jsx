import * as S from './Secession.style';
import check2 from '../../assets/images/check2.png';
import x from '../../assets/images/X.png';
import { PAGE_PATH } from '../../constants';
import { useNavigate } from 'react-router-dom';

const Secession = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const nav = useNavigate();

	const handleEdit = () => {
		nav(`${PAGE_PATH.BASE}/${PAGE_PATH.LOGIN}`);
	};


	return (
		<S.SecessionOverlay>
			<S.SecessionContent>
                <S.CloseButton onClick={onClose}>
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

			</S.SecessionContent>
		</S.SecessionOverlay>
	);
};

export default Secession;
