import * as S from './ModifyPage.style';
import MoblieIcon from '../../components/Icon/MobileIcon/MoblieIcon';
import { PAGE_PATH } from '../../constants';
import { useNavigate, useParams } from 'react-router-dom';

const ModifyPage = () => {
	const nav = useNavigate();
	const { id } = useParams();

	const handleEdit = () => {
		nav(`${PAGE_PATH.MY_PAGE}/${PAGE_PATH.EDIT}/${id}`);
	};

	const ModifyItem = ({ label, value }) => (
		<S.ModifyContainer>
			<S.ModifyWrapper>
				<div>{label}</div>
			</S.ModifyWrapper>
			<S.InfoWrapper>
				<div>{value}</div>
			</S.InfoWrapper>
		</S.ModifyContainer>
	);

	return (
		<S.Container>
			<MoblieIcon text="MYPAGE" noBack={true} />
			<S.ModifyTitle>MYPAGE</S.ModifyTitle>

			<ModifyItem label="Nickname" value="Coding Bear" />
			<ModifyItem label="Number" value="010-****-****" />
			<ModifyItem label="Gender" value="Male" />
			<ModifyItem label="Height" value="123 cm" />

			<S.EditingWrapper>
				<div onClick={handleEdit}>수정하기</div>
			</S.EditingWrapper>

			<S.DeleteTitle>계정을 삭제하시겠습니까? 회원 탈퇴하기</S.DeleteTitle>
		</S.Container>
	);
};

export default ModifyPage;
