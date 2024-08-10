import styled, { keyframes } from 'styled-components';

const spinning = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);;
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
	display: grid;
	place-items: center;
	position: relative;

	width: 100vw;
	height: 100vh;

	img {
		position: absolute;
		animation: ${spinning} 900ms 0s infinite linear normal;

		@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) {
			width: 11%;
		}
	}
`;

const LoadingText = styled.div`
	display: grid;
	place-items: center;
	width: 130px;
	height: 45px;

	background-color: #fff;
	border-radius: 100px;

	font-weight: bold;
	font-size: 15px;
	letter-spacing: 0.1px;

	z-index: 1;

	@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) {
		width: 140px;
		height: 50px;
	}
`;

export { Container, LoadingText };
