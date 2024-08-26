import { Outlet } from 'react-router-dom';
import * as S from './FittingLayout.style';
import BackGround from '../../assets/images/Vector.svg';

const FittingLayout = () => {
	return (
		<S.Container>
			<S.BackGround src={BackGround} />
			<S.OutletWrapper>
				<Outlet />
			</S.OutletWrapper>
		</S.Container>
	);
};

export default FittingLayout;
