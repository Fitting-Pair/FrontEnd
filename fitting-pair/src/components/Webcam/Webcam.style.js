import styled from "styled-components";

const Container = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) {
    width: 550px;
    height: 550px;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1023px) {
    width: 550px;
    height: 550px;
  }
`;

const WebCam = styled.video`
  width: 550px;
  height: 550px;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);

  display: ${(props) => (props.$showCam ? "" : "none")};
`;

const Canvas = styled.canvas`
  display: ${(props) => (props.$showCanvas ? "" : "none")};
`;

const Button = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  bottom: 0;
  left: 47%;

  display: grid;
  place-items: center;

  width: 70px;
  height: 35px;
  margin: 10px;
  border: none;
  border-radius: 25px;
  color: white;
  background-color: #7c9c80;
  font-weight: bold;
  font-size: 12px;
  box-shadow: 0px 6px 20px -8px rgba(0, 0, 0, 0.5);

  cursor: pointer;
`;

export { Container, WebCam, Canvas, Button };
