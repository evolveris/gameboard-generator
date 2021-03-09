import styled from "styled-components";

const StyledThemeToggle = styled.button`
    display: block;
    margin: 0px auto;
    height: 40px;
    width: 100px;
    border-radius: 30px;
    border: none;
    background-color: ${props => props.background};
    display: flex;
    justify-content: space-between;
    align-items: center;    
    &:before {
        content: "";
        display: block;
        height: 30px;
        background-color: green;
        border-radius: 30px;
        width: 50%;
        transform: ${props => props.transition};
        transition: transform 0.3s ease-in;
    }
`
export default StyledThemeToggle