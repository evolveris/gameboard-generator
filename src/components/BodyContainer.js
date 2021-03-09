import React from 'react';
import StyledBodyContainer from './BodyContainer.styles';

function BodyContainer ({ theme, children }) {
    return (
      <StyledBodyContainer theme={theme}>
          {children}
      </StyledBodyContainer>
    );
}

export default BodyContainer;
  