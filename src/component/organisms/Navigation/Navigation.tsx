import React, { useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { delay } from 'lodash';

import { Searchbox } from '@/component/molecules';
import { Image } from '@/component/atoms';
import { useSearchbox } from '@/hook';

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
  const router = useRouter();

  const { search: querySearch = '' } = router.query;

  const search = useSearchbox((state) => state.search);
  const clearSearch = useSearchbox((state) => state.clearSearch);

  const timer = useRef<any>(undefined);

  const goToMainPage = () => {
    clearSearch();
    router.push({
      pathname: '/',
    });
  };

  const goToSearchPage = useCallback(
    (newSearch: string) => {
      if (!newSearch) return;

      router.push({
        pathname: '/result',
        query: {
          search: newSearch,
        },
      });
    },
    [router]
  );

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = delay(() => {
      if (search === querySearch) return;
      goToSearchPage(search);
    }, 1000);
  }, [search, querySearch, goToSearchPage]);

  return (
    <Container>
      <ImageContainer>
        <Link href={'/'} onClick={goToMainPage}>
          <Image name="peakLogo" alt="logo" objectFit="contain" />
        </Link>
      </ImageContainer>
      <SearchboxContainer>
        <Searchbox intitalValue={querySearch} />
      </SearchboxContainer>
    </Container>
  );
};

export default Navigation;
