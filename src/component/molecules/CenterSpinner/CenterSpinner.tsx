import React from 'react';
import styled from 'styled-components';

import { Spinner } from '@/component/atoms';

const SpinerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 4rem 0;
`;

const CenterSpinner = () => {
  return (
    <SpinerContainer>
      <Spinner size="5rem" />
    </SpinerContainer>
  );
};

export default CenterSpinner;
