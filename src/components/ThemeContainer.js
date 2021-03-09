import React from 'react';
import StyledThemeContainer from './ThemeContainer.styles';

function ThemeContainer ({ theme, children }) {
    return (
      <StyledThemeContainer theme={theme}>
          {children}
      </StyledThemeContainer>
    );
}

export default ThemeContainer;
  