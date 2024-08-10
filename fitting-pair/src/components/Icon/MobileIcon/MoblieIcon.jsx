import * as S from './MovblieIcon.style';
import { FaArrowLeft } from 'react-icons/fa6';
import LogOut from '../../../assets/images/door.png';
import useLogout from '../../../hooks/queries/useLogout';
import { useNavigate } from 'react-router-dom';

const MoblieIcon = ({ text, noBack }) => {
	const nav = useNavigate();
	const { mutate } = useLogout();

	const handleLogout = () => {
		mutate();
	};

	return (
		<S.Container>
			{noBack ? <span></span> : <FaArrowLeft onClick={() => nav(-1)} />}
			<div>{text}</div>
			<img src={LogOut} onClick={handleLogout} />
		</S.Container>
	);
};

export default MoblieIcon;
