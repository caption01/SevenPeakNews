import React from 'react';
import styled from 'styled-components';

import { Searchbox } from '@/component/molecules';
import { Image } from '@/component/atoms';

interface ContainerStyleProps {
  spaceX?: number;
}

interface Navagation extends ContainerStyleProps {}

const Container = styled.div<ContainerStyleProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  padding: ${({ spaceX }) => (spaceX ? `0 ${(100 - spaceX) / 2}%` : `0 0`)};
`;

const ImageContainer = styled.div`
  position: relative;
  width: 15rem;
  height: 15rem;
`;

const SearchboxContainer = styled.div`
  align-self: flex-end;
`;

const Navigation = ({ spaceX = 100 }: Navagation) => {
  return (
    <Container spaceX={spaceX}>
      <ImageContainer>
        <Image name="peakLogo" alt="logo" objectFit="contain" />
      </ImageContainer>
      <SearchboxContainer>
        <Searchbox />
      </SearchboxContainer>
    </Container>
  );
};

export default Navigation;
