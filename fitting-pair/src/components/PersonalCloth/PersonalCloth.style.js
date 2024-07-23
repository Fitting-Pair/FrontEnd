import styled from "styled-components";
import theme from "../../styles/theme";

const ImageBox = styled.div`
    ${theme.ALIGN.COLUMN_CENTER};
    width: 250px;
    height: 250px;
    background-color: white;
    margin: 0px 15px;
    border-radius: 24px;
    box-shadow: 0px 6px 20px -8px rgba(0, 0, 0, 0.5);
`;

export { ImageBox };
