import { useEffect, useRef, useState } from 'react';
import * as S from './Webcam.style';
import { useNavigate } from 'react-router-dom';
import CamImg from '../../assets/images/camera_img.webp';
import { FaArrowRight } from 'react-icons/fa6';
import { useMutation } from '@tanstack/react-query';
import { postImg } from '../../api/image';
import { dataURLToBlob } from '../../util';

const Webcam = () => {
	const nav = useNavigate();
	const [count, setCount] = useState(5);
	const [image, setImage] = useState(null);
	const [formData, setFormData] = useState(null);

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
			.then(stream => {
				if (camRef.current) {
					camRef.current.srcObject = stream;
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	useEffect(() => {
		startCamera();
		return () => {
			const stream = camRef.current?.srcObject;
			if (stream) {
				stream.getTracks().forEach(track => track.stop());
			}
		};
	}, []);

	const screenShot = () => {
		setShowCanvas(true);
		setShowCam(false);

		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		canvas.width = camRef.current.videoWidth;
		canvas.height = camRef.current.videoHeight;

		context.translate(canvas.width, 0);
		context.scale(-1, 1);
		context.drawImage(camRef.current, 0, 0, canvas.width, canvas.height);

		// 이미지 저장
		const imageData = canvas.toDataURL('image/png');
		setImage(imageData);

		// Blob으로 변환
		const imageBlob = dataURLToBlob(imageData);

		// FormData에 Blob 추가
		const formData = new FormData();
		formData.set('imageFile', imageBlob, 'image.png');
		setFormData(formData);

		// 카메라 스트림 멈추기
		const stream = camRef.current?.srcObject;
		if (stream) {
			stream.getTracks().forEach(track => track.stop());
		}
	};

	const startTimer = () => {
		if (timerIdRef.current) {
			clearInterval(timerIdRef.current);
		}
		setCount(5);
		timerIdRef.current = setInterval(() => {
			setCount(count => {
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
			stream.getTracks().forEach(track => track.stop());
		}
		setShowCanvas(false);
		setShowCam(true);
		startCamera(); // 카메라 스트림 다시 설정
		startTimer();
	};

	const { mutate } = useMutation({
		mutationFn: postImg,
		onSuccess: data => {
			console.log(data);
			nav('/body-check/styling', { replace: true });
		},
		onError: data => {
			console.log(data);
		},
	});

	const handleNextClick = () => {
		if (formData) {
			console.log('FormData to be sent:', formData.get('imageFile'));
			mutate(formData);
		}
	};

	return (
		<div>
			<S.Container>
				<S.WebCam ref={camRef} $showCam={showCam} autoPlay playsInline muted />
				<S.Canvas ref={canvasRef} $showCanvas={showCanvas} />
			</S.Container>
			<S.Button onClick={handleClick}>
				{count === 5 ? <img src={CamImg} /> : count}
			</S.Button>
			{image && (
				<S.NextButton onClick={handleNextClick}>
					<FaArrowRight />
				</S.NextButton>
			)}
		</div>
	);
};

export default Webcam;
