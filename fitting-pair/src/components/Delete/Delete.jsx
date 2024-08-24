import * as S from './Delete.style';
import warning from '../../assets/images/warning.png';
import x from '../../assets/images/X.png';

const Delete = ({ isVisible, onClose }) => {
	if (!isVisible) return null;

	return (
		<S.DeleteOverlay>
			<S.DeleteContent>
                <S.XWrapper>
                    <img src={x} />
                </S.XWrapper>
                <S.WarningWrapper>
		    		<img src={warning} />
                </S.WarningWrapper>
				<p>
					정말 회원 탈퇴를
					<br /> 진행하시겠습니까?
                    <br /> 이후에는 되돌릴 수 없습니다.
				</p>
				<button onClick={onClose}>회원 탈퇴하기</button>
			</S.DeleteContent>
		</S.DeleteOverlay>
	);
};

export default Delete;
