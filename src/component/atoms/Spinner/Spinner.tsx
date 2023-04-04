import React from 'react';
import styled from 'styled-components';

import * as CSSType from '@/component/utils/csstype';

interface StyleDiv {
  size: CSSType.Width;
}

const StyledDiv = styled.div<StyleDiv>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  border: ${({ theme }) => `0.5rem solid ${theme.colors.darkBlue}`};
  border-top-color: ${({ theme }) => theme.colors.grey};
  animation: spinner 1s ease-in-out infinite;

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = ({ size = '3rem' }) => {
  return <StyledDiv size={size} />;
};

export default Spinner;
