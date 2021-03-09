import React from 'react';
import StyledThemeToggle from './ThemeToggle.styles';

function ThemeToggle ({ toggleTheme, theme }) {
    return (
      <StyledThemeToggle onClick={toggleTheme} theme={theme}/>
    );
  }
  
export default ThemeToggle;
  