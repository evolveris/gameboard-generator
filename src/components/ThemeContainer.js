import React, { useContext } from 'react';
import StyledThemeContainer from './ThemeContainer.styles';
import { ThemeContext } from '../App';

function ThemeContainer ({ children }) {
    const context = useContext(ThemeContext);
    return (
      <StyledThemeContainer theme={context.themeContainerBackground}>
          {children}
      </StyledThemeContainer>
    );
}

export default ThemeContainer;
  