import * as S from "./Modal.style";
import check2Img from "../../assets/images/check2.png";


const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <S.ModalOverlay>
        <S.ModalContent>
            <img src={check2Img} />
            <h2>Success</h2>
            <p>Congratulations!
<br/> Saved on your mypage!</p>
            <button onClick={onClose}>OK</button>
        </ S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;