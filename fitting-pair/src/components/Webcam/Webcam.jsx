import { useEffect, useRef, useState } from "react";
import * as S from "./Webcam.style";
import { useNavigate } from "react-router-dom";
import CamImg from "../../assets/images/camera_img.webp";
import { FaArrowRight } from "react-icons/fa6";

const Webcam = () => {
  const nav = useNavigate();
  const [count, setCount] = useState(5);
  const [image, setImage] = useState(null);

  const timerIdRef = useRef(null);
  const camRef = useRef(null);
  const canvasRef = useRef(null);

  const [showCanvas, setShowCanvas] = useState(false);
  const [showCam, setShowCam] = useState(true);

  const startCamera = () => {
    const constraints = {
      video: true,
      audio: false,
    };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        if (camRef.current) {
          camRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    startCamera();
    return () => {
      const stream = camRef.current?.srcObject;
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const screenShot = () => {
    setShowCanvas(true);
    setShowCam(false);

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = camRef.current.videoWidth;
    canvas.height = camRef.current.videoHeight;

    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    context.drawImage(camRef.current, 0, 0, canvas.width, canvas.height);

    // 이미지 저장
    const imageData = canvas.toDataURL();
    setImage(imageData);
    const link = document.createElement("a");
    link.href = imageData;
    link.download = "test";
    link.click();

    // 카메라 스트림 멈추기
    const stream = camRef.current?.srcObject;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  const startTimer = () => {
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
    }
    setCount(5);
    timerIdRef.current = setInterval(() => {
      setCount((count) => {
        if (count === 0) {
          clearInterval(timerIdRef.current);
          screenShot();
          return 5;
        }
        return count - 1;
      });
    }, 1000);
  };

  const handleClick = () => {
    const stream = camRef.current?.srcObject;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    setShowCanvas(false);
    setShowCam(true);
    startCamera(); // 카메라 스트림 다시 설정
    startTimer();
  };

  return (
    <div>
      <S.Container>
        <S.WebCam ref={camRef} $showCam={showCam} autoPlay playsInline muted />
        <S.Canvas ref={canvasRef} $showCanvas={showCanvas} />
      </S.Container>
      <S.Button onClick={handleClick}>{count === 5 ? <img src={CamImg} /> : count}</S.Button>
      {image && (
        <S.NextButton onClick={() => nav("/body-check/styling")}>
          <FaArrowRight />
        </S.NextButton>
      )}
    </div>
  );
};

export default Webcam;
