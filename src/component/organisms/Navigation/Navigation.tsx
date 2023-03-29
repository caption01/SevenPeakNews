import React from 'react';
import styled from 'styled-components';

import { Searchbox } from '@/component/molecules';
import { Image } from '@/component/atoms';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkBlue};
`;

const ImageContainer = styled.div`
  position: relative;
  width: 15rem;
  height: 15rem;
`;

const Navigation = () => {
  return (
    <Container>
      <ImageContainer>
        <Image name="peakLogo" alt="logo" objectFit="contain" />
      </ImageContainer>
      <div>
        <Searchbox />
      </div>
    </Container>
  );
};

export default Navigation;
