import styled from "styled-components";
import theme from "../../styles/theme";

const ModalOverlay = styled.div`
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
  
const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 381px;
    height: 485px;    
    background: #F4EFE7;
    padding: 20px;
    border-radius: 16px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    
    img{
        width: 96px;
        height: 96px;
        
    }

    h2{
        margin-top: 24px;
        font-family: ${theme.FONT.ROBOTO_MEDIUM};
        font-size: 28px;
        color: #6D6B69;
    }

    p {
        margin-top: 12px;
    }

    button {
        display: grid;
        place-items: center;

        width: 117px;
        height: 40px;
        margin: 10px;
        border: none;
        border-radius: 25px;
        color: white;
        background-color: #6D6B69;
        font-weight: bold;
        font-size: 12px;
        box-shadow: 0px 6px 20px -8px rgba(0, 0, 0, 0.5);

        &:hover {
        cursor: pointer;
        }

        img {
        width: 27%;
    }
        margin-top: 24px;
    }
`;
  

export { ModalContent, ModalOverlay };