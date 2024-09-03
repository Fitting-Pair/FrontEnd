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
	width: 227px;
	height: 251px;
	background: #f4efe7;
	padding: 20px;
	border-radius: 16px;
	max-width: 100%;

	p {
		margin-top: 12px;
		font-family: ${theme.FONT.ROBOTO_BOLD};
        font-size: 13px;
        color: #6E6C6A;
        margin-top: 16px;
		line-height: 20px;
	}

`;

const Button = styled.div`
    margin-top: 16px;
	color: #fff;
    background-color: #6E6C6A;
    border-radius: 25px;
    width: 165px;
    height: 33px;
    flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
    flex-direction: column;
    padding-top: 9px;
	padding-bottom: 20px;
    font-size: 12px;
    font-family: ${theme.FONT.ROBOTO_BOLD};
`;

const WarningWrapper = styled.div`
	height: 100px;
	width: 100px;
	width: 100%;
`;

const CloseButton = styled.div`
    display: flex;
    width: 100%;
`;

export { 

    DeleteContent,
    DeleteOverlay, 
    Button, 
    WarningWrapper, 
    CloseButton,

};
