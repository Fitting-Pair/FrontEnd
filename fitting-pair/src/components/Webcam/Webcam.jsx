import { useEffect, useRef, useState } from "react";
import * as S from "./Webcam.style";
import { useNavigate } from "react-router-dom";
import CamImg from "../../assets/images/camera_img.webp";

const Webcam = () => {
  const nav = useNavigate();
  const [count, setCount] = useState(5);
  let timerId;

  const camRef = useRef(null);
  const canvasRef = useRef(null);

  const [showCanvas, setShowCanvas] = useState(false);
  const [showCam, setShowCam] = useState(true);

  useEffect(() => {
    try {
      const constraints = {
        video: true,
        audio: false,
      };
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          camRef.current.srcObject = stream;
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
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
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "test";
    link.click();

    const s = camRef.current.srcObject;
    if (s) {
      s.getTracks().forEach((track) => {
        track.stop();
      });
    }
  };

  const startTimer = () => {
    timerId = setInterval(() => {
      setCount((count) => {
        if (count === 0) {
          clearInterval(timerId);
          screenShot();
          return 5;
        }
        return count - 1;
      });
    }, 1000);
  };

  const handleClick = () => {
    if (!timerId) {
      setCount(5);
      startTimer();
    }
  };

  return (
    <div>
      <S.Container>
        <S.WebCam ref={camRef} $showCam={showCam} autoPlay playsInline muted />
        <S.Canvas ref={canvasRef} $showCanvas={showCanvas} />
      </S.Container>
      {showCam ? (
        <S.Button onClick={handleClick}>{count === 5 ? <img src={CamImg} /> : count}</S.Button>
      ) : (
        <S.Button onClick={() => nav("/body-check/result")}>next</S.Button>
      )}
    </div>
  );
};

export default Webcam;
