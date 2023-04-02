import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { Searchbox } from '@/component/molecules';
import { Image } from '@/component/atoms';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 15rem;
  height: 15rem;
`;

const SearchboxContainer = styled.div`
  align-self: flex-end;
`;

const Navigation = () => {
  return (
    <Container>
      <ImageContainer>
        <Link href={'/'}>
          <Image name="peakLogo" alt="logo" objectFit="contain" />
        </Link>
      </ImageContainer>
      <SearchboxContainer>
        <Searchbox />
      </SearchboxContainer>
    </Container>
  );
};

export default Navigation;
