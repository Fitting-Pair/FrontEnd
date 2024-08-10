import styled from 'styled-components';
import theme from '../../styles/theme';

const Container = styled.div`
	${theme.ALIGN.COLUMN_CENTER};
`;

const IconWrapper = styled.div`
	display: flex;
	font-size: 13px;
	margin: 20px 5px 24px 5px;
`;

const Icon = styled.div`
	${theme.ALIGN.ROW_CENTER};
	width: 100px;
	height: 33px;
	background-color: white;
	border-radius: 20px;

	padding: 10px;
	margin: 6px;

	font-family: ${theme.FONT.ROBOTO_MEDIUM};

	img {
		margin-right: 10px;
		width: 13%;
	}

	@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) {
		font-size: 17px;
		width: 135px;
		height: 43px;
		border-radius: 50px;
	}

	@media only screen and (min-device-width: 768px) and (max-device-width: 1023px) {
		font-size: 15px;
		width: 110px;
		height: 37px;
		border-radius: 50px;
	}
`;

const IconBlack = styled(Icon)`
	width: 130px;

	color: white;
	background-color: black;

	@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) {
		width: 135px;
	}

	@media only screen and (min-device-width: 768px) and (max-device-width: 1023px) {
		width: 145px;
	}
`;

const ContentWrapper = styled.div`
	width: 325px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	line-height: 24px;

	margin: 10px 30px;
	font-size: 16px;
	font-family: ${theme.FONT.ROBOTO_MEDIUM};

	span {
		text-align: center;
		margin-bottom: 10px;
	}
`;

const ResultWrapper = styled.div`
	${theme.ALIGN.COLUMN_CENTER};
	width: 996px;
	height: 996px;
	border-radius: 24px;
	background-color: white;
	opacity: 0.8;
`;

const ClothWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
	width: 996px;
	height: 342px;
	margin: 24px 24px;
	border-radius: 24px;

	section {
		display: flex;
		flex-direction: row;
		justify-content: left;
		align-items: center;
	}

	span {
		${theme.ALIGN.COLUMN_CENTER};
		width: 90px;
		height: 40px;
		border-radius: 100px;
		background-color: white;
		text-align: center;
		margin: 0px 10px 15px 15px;
		border: none;
		border-radius: 25px;
		color: white;
		background-color: #7c9c80;
		font-weight: bold;
		font-size: 12px;
		box-shadow: 0px 6px 20px -8px rgba(0, 0, 0, 0.5);
	}

	img {
	}

	div {
		${theme.ALIGN.COLUMN_CENTER};
		width: 250px;
		height: 250px;
		background-color: white;
		margin: 0px 15px;
		border-radius: 24px;

		&:hover {
			cursor: pointer;
			box-shadow: 0px 6px 20px -8px rgba(0, 0, 0, 0.5);
		}

		&:focus {
			background-color: blue;
			transition: 0.5s;
		}
	}
`;

const ResultTitle = styled.div`
	font-family: ${theme.FONT.JIMHURIA_REGULAR};
	font-size: 82px;

	span {
		color: #ffc791;
	}
`;

const ResultImg = styled.div``;

const ResultExplainWrapper = styled.div`
	display: flex;
`;

const ContentResultContainer = styled.div`
	position: relative;
	display: grid;
	place-items: center;
`;

const Button = styled.div`
	display: grid;
	place-items: center;

	width: 117px;
	height: 40px;
	margin: 10px;
	border: none;
	border-radius: 25px;
	color: white;
	background-color: #7c9c80;
	font-weight: bold;
	font-size: 12px;
	box-shadow: 0px 6px 20px -8px rgba(0, 0, 0, 0.5);

	&:hover {
		color: white;
		transition: 0.5s;
	}

	img {
		width: 27%;
	}
`;

export {
	Button,
	ClothWrapper,
	ResultExplainWrapper,
	ResultImg,
	ResultTitle,
	Container,
	IconWrapper,
	Icon,
	IconBlack,
	ContentWrapper,
	ContentResultContainer,
	ResultWrapper,
};
