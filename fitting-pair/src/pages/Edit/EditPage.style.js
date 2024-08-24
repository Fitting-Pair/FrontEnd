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
	margin-bottom: 50px;
	${theme.ALIGN.COLUMN_CENTER};
	font-family: ${theme.FONT.JIMHURIA_REGULAR};
	font-size: 128px;
	text-align: center;
	line-height: 70px;
`;

const EditingWrapper = styled.div`
	margin-top: 30px;
	font-family: ${theme.FONT.JIMHURIA_REGULAR};
	font-size: 25px;
	color: #fff;
	text-align: center;
	text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
	flex-basis: 80px;

`;
const EditingContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
`;

const InfoWrapper = styled.div`
	margin-top: 30px;
	margin-left: 30px;
	font-family: ${theme.FONT.ROBOTO_BOLD};
	font-size: 12px;
	width: 100%;
	padding-top: 20px;
	padding-bottom: 20px;
	padding-left: 20px;
	border-radius: 16px;
	background-color: #fff;
	color: #6E6C6A;
	box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
	flex-basis: 300px;
	align-items: left;
	flex-direction: left;
`;

const SubmmitWrapper = styled.div`
	margin-top: 100px;
	background-color: #7C9C80;
	padding-top: 20px;
	padding-bottom: 20px;
	border-radius: 16px;
	width: 350px;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #fff;
	font-family: ${theme.FONT.ROBOTO_BOLD};
	font-size: 14px;
	box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
`;

const DeleteTitle = styled.div`
	margin-top: 20px;
	font-family: ${theme.FONT.ROBOTO_BOLD};
	font-size: 12px;
	color: #fff;
	width: 77%;
	text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);


`;

export {
	Container,
	EditingTitle,
	EditingWrapper,
	Container,
	SubmmitWrapper,
	InfoWrapper,
	DeleteTitle

};
