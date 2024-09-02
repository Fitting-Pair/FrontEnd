import * as S from './EditPage.style';
import MoblieIcon from '../../components/Icon/MobileIcon/MoblieIcon';
import { PAGE_PATH } from '../../constants';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import Delete from '../../components/Delete/Delete';
import Secession from '../../components/Secession/Secession';
import Ruler from '../../assets/images/ruler.png'
import Pen from '../../assets/images/pen.png'
import Phone from '../../assets/images/phone.png'
import Gender from '../../assets/images/gender.png'
import Logo from '../../assets/images/Logo-black.png';

const EditPage = () => {
	const nav = useNavigate();
	const { id } = useParams();

	const handleEdit = () => {
		nav(`${PAGE_PATH.MY_PAGE}/${PAGE_PATH.MODIFY}/${id}`);
	};

	const [isDeleteVisible, setDeleteVisible] = useState(false);
	const [isSecessionVisible, setSecessionVisible] = useState(false);

	const openDelete = () => {
		setDeleteVisible(true);
		setSecessionVisible(false);
	};

	const closeDelete = () => {
		setDeleteVisible(false);
		setSecessionVisible(true);
	};

	return (
		<S.Container>
			<MoblieIcon text="FITTING PAIR" noBack={true} />
			<S.EditingTitle>EDIT</S.EditingTitle>
			<S.EditingContainer>
				<S.EditingWrapper>
					<div>닉네임</div>
				</S.EditingWrapper>
				<S.PlusWrapper>
					<div>다른 유저와 겹치지 않도록 입력해주세요. (2~20자)</div>
				</S.PlusWrapper>
				<S.InfoWrapper>
					<div>
						<input placeholder='닉네임'/>
						<img src = {Pen}/>
					</div>
				</S.InfoWrapper>
			</S.EditingContainer>
			<S.EditingContainer>
				<S.EditingWrapper>
					<div>휴대폰 번호</div>
				</S.EditingWrapper>
				<S.PlusWrapper>
					<div>
						11자리 입력해주세요.
					</div>
				</S.PlusWrapper>
				<S.InfoWrapper>
					<div>010-4934-0093</div>
					<img src={Phone}/>
				</S.InfoWrapper>
			</S.EditingContainer>
			<S.EditingContainer>
				<S.EditingWrapper>
					<div>성별</div>
				</S.EditingWrapper>
				<S.GenderWrapper>
					<img src={Gender}/>
				</S.GenderWrapper>
			</S.EditingContainer>
			<S.EditingContainer>
				<S.EditingWrapper>
					<div>키(신장)</div>
				</S.EditingWrapper>
				<S.InfoWrapper>
					<div>
						<input placeholder='Height'/>
						<img src = {Ruler}/>
					</div>
				</S.InfoWrapper>
			</S.EditingContainer>
			<S.SubmmitWrapper>
				<div onClick={handleEdit}>완료</div>
			</S.SubmmitWrapper>

			<S.Button onClick={openDelete}>
				<div>회원 탈퇴</div>
			</S.Button>
			<Delete isVisible={isDeleteVisible} onClose={closeDelete} />

			<S.BlackLogo src={Logo} />
		</S.Container>
	);
};

export default EditPage;
