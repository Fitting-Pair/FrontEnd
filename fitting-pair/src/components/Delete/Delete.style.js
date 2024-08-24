import styled from 'styled-components';
import theme from '../../styles/theme';

const DeleteOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const DeleteContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 381px;
	height: 485px;
	background: #f4efe7;
	padding: 20px;
	border-radius: 16px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	max-width: 100%;

	p {
		margin-top: 12px;
		font-family: ${theme.FONT.ROBOTO_BOLD};
	}

	button {
		display: grid;
		place-items: center;

		width: 117px;
		height: 40px;
		margin: 10px;
		border: none;
		border-radius: 25px;
		color: white;
		background-color: #6e6c6a;
		font-weight: bold;
		font-size: 12px;
		box-shadow: 0px 6px 20px -8px rgba(0, 0, 0, 0.5);

		&:hover {
			cursor: pointer;
		}

		img {
			width: 27%;
		}
		margin-top: 24px;
	}
`;

const XWrapper = styled.div`
	height: 20px;
	width: 9px;
`;

const WarningWrapper = styled.div`
	height: 110px;
	width: 110px;
`;

export { DeleteContent, DeleteOverlay, XWrapper, WarningWrapper };
