import styled from "styled-components";

const StyledThemeContainer = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: ${props => props.theme === 'light' ? '#ede3e3' : '#474545'};
`
export default StyledThemeContainer