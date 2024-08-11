import * as S from './MovblieIcon.style';
import { FaArrowLeft } from 'react-icons/fa6';
import LogOut from '../../../assets/images/door.png';
import useLogout from '../../../hooks/queries/useLogout';
import { useNavigate } from 'react-router-dom';
import { FaPen } from 'react-icons/fa6';
import { PAGE_PATH } from '../../../constants';

const MoblieIcon = ({ text, noBack }) => {
	const id = 1; // TODO: 유저 아이디로 수정
	const nav = useNavigate();
	const { mutate } = useLogout();

	const handleLogout = () => {
		mutate();
	};

	const handleModify = () => {
		nav(`${PAGE_PATH.MY_PAGE}/${PAGE_PATH.MODIFY}/${id}`);
	};

	return (
		<S.Container>
			{noBack ? (
				<FaPen onClick={handleModify} />
			) : (
				<FaArrowLeft onClick={() => nav(-1)} />
			)}
			<div>{text}</div>
			<img src={LogOut} onClick={handleLogout} />
		</S.Container>
	);
};

export default MoblieIcon;
