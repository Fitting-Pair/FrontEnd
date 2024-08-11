import * as S from './MovblieIcon.style';
import { FaArrowLeft } from 'react-icons/fa6';
import LogOut from '../../../assets/images/door.png';
import useLogout from '../../../hooks/queries/useLogout';
import { useNavigate } from 'react-router-dom';
import { FaPen } from 'react-icons/fa6';

const MoblieIcon = ({ text, noBack }) => {
	const nav = useNavigate();
	const { mutate } = useLogout();

	const handleLogout = () => {
		mutate();
	};

	const handleModifiy = () => {};

	return (
		<S.Container>
			{noBack ? (
				<FaPen onClick={handleModifiy} />
			) : (
				<FaArrowLeft onClick={() => nav(-1)} />
			)}
			<div>{text}</div>
			<img src={LogOut} onClick={handleLogout} />
		</S.Container>
	);
};

export default MoblieIcon;
