import styled from "styled-components";

const StyledSquare = styled.div`
    border: 1px solid green;
    box-sizing: border-box;
    background-color: ${props => props.theme};
    width: 100px;
    height: 100px;
`
export default StyledSquare