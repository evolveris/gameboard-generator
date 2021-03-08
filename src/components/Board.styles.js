import styled from "styled-components";

const StyledBoard = styled.div`
    height: ${props => props.boardSize ? `${props.boardSize * 100}px` : 0};
    width: ${props => props.boardSize ? `${props.boardSize * 100}px` : 0};    
    display: flex;
    flex-wrap: wrap;
    margin: 30px auto;
`
export default StyledBoard