import * as S from './EditPage.style';
import MoblieIcon from '../../components/Icon/MobileIcon/MoblieIcon';
import { PAGE_PATH } from '../../constants';
import { useNavigate, useParams } from 'react-router-dom';

const EditPage = () => {
	const nav = useNavigate();
	const { id } = useParams();

	const handleEdit = () => {
		nav(`${PAGE_PATH.MY_PAGE}/${PAGE_PATH.MODIFY}/${id}`);
	};

	return (
		<S.Container>
			<MoblieIcon text="MYPAGE" noBack={true} />
			<S.EditingTitle>EDIT</S.EditingTitle>
			<S.EditingContainer>
				<S.EditingWrapper>
					<div>Nickname</div>
				</S.EditingWrapper>
				<S.InfoWrapper>
					<div>Coding Bear</div>
				</S.InfoWrapper>
			</S.EditingContainer>
			<S.EditingContainer>
				<S.EditingWrapper>
					<div>Nickname</div>
				</S.EditingWrapper>
				<S.InfoWrapper>
					<div>Coding Bear</div>
				</S.InfoWrapper>
			</S.EditingContainer>
			<S.EditingContainer>
				<S.EditingWrapper>
					<div>Nickname</div>
				</S.EditingWrapper>
				<S.InfoWrapper>
					<div>Coding Bear</div>
				</S.InfoWrapper>
			</S.EditingContainer>
			<S.EditingContainer>
				<S.EditingWrapper>
					<div>Nickname</div>
				</S.EditingWrapper>
				<S.InfoWrapper>
					<div>Coding Bear</div>
				</S.InfoWrapper>
			</S.EditingContainer>
			<S.SubmmitWrapper>
				<div onClick={handleEdit}>저장하기</div>
			</S.SubmmitWrapper>

			<S.DeleteTitle>계정을 삭제하시겠습니까? 회원 탈퇴하기</S.DeleteTitle>
		</S.Container>
	);
};

export default EditPage;
