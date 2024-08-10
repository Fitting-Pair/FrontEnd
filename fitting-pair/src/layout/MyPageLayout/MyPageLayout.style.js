import styled from 'styled-components';
import theme from '../../styles/theme';

const Container = styled.div`
	background-color: #f4efe7;
	height: calc(var(--vh, 1vh) * 100);

	${theme.ALIGN.COLUMN_CENTER};
`;

const OutletContainer = styled.div`
	max-width: 480px;
	width: 100%;
	height: 100%;
`;

export { Container, OutletContainer };
