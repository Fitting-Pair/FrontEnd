import * as S from './ModifyBack.style';
import { FaArrowLeft } from 'react-icons/fa6';
import LogOut from '../../../assets/images/door.png';
import useLogout from '../../../hooks/queries/useLogout';
import { useNavigate, useParams } from 'react-router-dom';
import { FaPen } from 'react-icons/fa6';
import { PAGE_PATH } from '../../../constants';


const ModifyBack = ({ text, noBack }) => {
	const { id } = useParams();
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

export default ModifyBack;
