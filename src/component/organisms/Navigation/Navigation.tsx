import React from 'react';
import styled from 'styled-components';

import { Searchbox } from '@/component/molecules';
import { Image } from '@/component/atoms';

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

const Container = styled.div`
  background-color: blue;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 50rem;
  height: 50rem;
`;

export default Navigation;
