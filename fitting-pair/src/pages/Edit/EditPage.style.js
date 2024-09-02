import styled from 'styled-components';
import theme from '../../styles/theme';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	width: 100%;
	min-height: 800px;
	height: 100%;
	overflow: hidden;
	background: linear-gradient(
		200deg,
		#fdb985 11.63%,
		#fdeaad 55.58%,
		#a2c9b4 99.53%
	);
`;

const EditingTitle = styled.div`
	margin-top: 130px;
	margin-bottom: 30px;
	${theme.ALIGN.COLUMN_CENTER};
	font-family: ${theme.FONT.JIMHURIA_REGULAR};
	font-size: 128px;
	text-align: center;
	line-height: 70px;
`;

const EditingWrapper = styled.div`
	font-family: ${theme.FONT.JIMHURIA_REGULAR};
	font-size: 12px;
	margin-top: 11px;
	color: #000;
	display: flex;
`;

const EditingContainer = styled.div`
	justify-content: space-between;
	align-items: center;
	width: 84%;
	margin-top: 5px;
`;

const InfoWrapper = styled.div`
	display: flex;
	margin-top: 10px;
	font-family: ${theme.FONT.ROBOTO_BOLD};
	font-size: 12px;
	width: 100%;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 20px;
	background-color: #fff;
	color: #6e6c6a;
	flex-basis: 300px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	

	div {
		display: flex;

		input {
			border: none;
			color: #B9B9B9;	
			width: 70%;
		}

		img {
			display: flex;
			margin-left: 160px;
		}

	}

`;

const SubmmitWrapper = styled.div`
	margin-top: 35px;
	background-color: #7c9c80;
	padding-top: 10px;
	padding-bottom: 10px;
	width: 362px;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #fff;
	font-family: ${theme.FONT.ROBOTO_BOLD};
	font-size: 12px;
`;

const Button = styled.div`
	margin-top: 35px;
	font-family: ${theme.FONT.ROBOTO_BOLD};
	font-size: 12px;
	color: #fff;
	text-decoration-line: underline;
`;

const PlusWrapper = styled.div`
	margin-top: 5px;
	font-family: ${theme.FONT.ROBOTO_MEDIUM};
	font-size: 10px;
	color: #fff;
`;

const GenderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const BlackLogo = styled.img`
	position: absolute;
	bottom: 0;
`;

export {
	Container,
	EditingTitle,
	EditingWrapper,
	EditingContainer,
	SubmmitWrapper,
	InfoWrapper,
	Button,
	PlusWrapper,
	GenderWrapper,
	BlackLogo,
};
