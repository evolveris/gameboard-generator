import React, { useContext } from 'react';
import StyledThemeToggle from './ThemeToggle.styles';
import { ThemeContext } from '../App';

function ThemeToggle ({ toggleTheme }) {
    const context = useContext(ThemeContext);
    return (
      <StyledThemeToggle 
        onClick={toggleTheme} 
        background={context.themeToggleBackground} 
        transition={context.themeToggleTransition}/>
    );
  }
  
export default ThemeToggle;
  