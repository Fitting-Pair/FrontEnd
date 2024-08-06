import styled from "styled-components";
import theme from "../../styles/theme";

const ImageBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Wrap = styled.div`
    ${theme.ALIGN.COLUMN_CENTER};
    width: 250px;
    height: 250px;
    background-color: white;
    margin: 0px 15px;
    margin-bottom: 12px;
    border-radius: 24px;
    box-shadow: 0px 6px 12px -8px rgba(0, 0, 0, 0.5);

    &:focus-within {
        outline: 2px solid red;
    }
`

export { Wrap, ImageBox };
