import styled from "styled-components";

const StyledThemeToggle = styled.button`
    display: block;
    margin: 20px auto;
    height: 40px;
    width: 100px;
    border-radius: 30px;
    border: none;
    background-color: #efd9a0;
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
        transform: ${props => props.theme === 'light' ? 'translateX(0%)' : 'translateX(100%)'};
        transition: transform 0.3s ease-in;
    }
`
export default StyledThemeToggle