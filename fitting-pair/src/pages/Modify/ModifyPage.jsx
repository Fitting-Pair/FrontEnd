import * as S from './ModifyPage.style';
import MoblieIcon from '../../components/Icon/MobileIcon/MoblieIcon';
import { PAGE_PATH } from '../../constants';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import Delete from '../../components/Delete/Delete';
import Ruler from '../../assets/images/ruler.png'
import Pen from '../../assets/images/pen.png'
import Phone from '../../assets/images/phone.png'
import Gender from '../../assets/images/gender.png'
import Logo from '../../assets/images/Logo-black.png';


const ModifyPage = () => {
	const nav = useNavigate();
	const { id } = useParams();

	const handleEdit = () => {
		nav(`${PAGE_PATH.MY_PAGE}/${PAGE_PATH.EDIT}/${id}`);
	};

	const [isDeleteVisible, setDeleteVisible] = useState(false);
	const openDelete = () => {
		setDeleteVisible(true);
	};
	const closeDelete = () => {
		setDeleteVisible(false);
	};

	return (
		<S.Container>
			<MoblieIcon text="FITTING PAIR" noBack={true} />
			<S.ModifyTitle>MYPAGE</S.ModifyTitle>

			<S.ModifyContainer>
				<S.ModifyWrapper>
					<div>닉네임</div>
				</S.ModifyWrapper>
				<S.PlusWrapper>
					<div>다른 유저와 겹치지 않도록 입력해주세요. (2~20자)</div>
				</S.PlusWrapper>
				<S.InfoWrapper>
					<div>
						wooklas
						<img src = {Pen}/>
					</div>
				</S.InfoWrapper>
			</S.ModifyContainer>
			<S.ModifyContainer>
				<S.ModifyWrapper>
					<div>휴대폰 번호</div>
				</S.ModifyWrapper>
				<S.PlusWrapper>
					<div>
						11자리 입력해주세요.
					</div>
				</S.PlusWrapper>
				<S.InfoWrapper>
					<div>010-4934-0093</div>
					<img src={Phone}/>
				</S.InfoWrapper>
			</S.ModifyContainer>
			<S.ModifyContainer>
				<S.ModifyWrapper>
					<div>성별</div>
				</S.ModifyWrapper>
				<S.GenderWrapper>
					<img src={Gender}/>
				</S.GenderWrapper>
			</S.ModifyContainer>
			<S.ModifyContainer>
				<S.ModifyWrapper>
					<div>키(신장)</div>
				</S.ModifyWrapper>
				<S.InfoWrapper>
					<div>
						184cm
						<img src = {Ruler}/>
					</div>
				</S.InfoWrapper>
			</S.ModifyContainer>

			<S.EditingWrapper onClick={handleEdit}>
				<div>수정하기</div>
			</S.EditingWrapper>

			<S.Button onClick={openDelete}>
				<div>회원 탈퇴</div>
			</S.Button>
			<Delete isVisible={isDeleteVisible} onClose={closeDelete} />

			<S.BlackLogo src={Logo} />
		</S.Container>
	);
};

export default ModifyPage;
