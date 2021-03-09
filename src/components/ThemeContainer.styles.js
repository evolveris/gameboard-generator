import styled from "styled-components";

const StyledThemeContainer = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: ${props => props.theme};
`
export default StyledThemeContainer