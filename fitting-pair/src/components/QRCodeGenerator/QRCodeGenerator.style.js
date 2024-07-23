import styled from "styled-components";
import theme from "../../styles/theme";

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
      cursor: pointer;
    }

    img {
      width: 27%;
    }
`;
  

export { Button };