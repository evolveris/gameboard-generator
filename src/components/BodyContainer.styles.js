import styled from "styled-components";

const StyledBodyContainer = styled.div`
    padding-top: 20px;
    background-color: ${props => props.theme === 'light' ? 'white' : 'grey'};
`
export default StyledBodyContainer