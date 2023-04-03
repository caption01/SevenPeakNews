import React, { useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { delay } from 'lodash';

import { Searchbox } from '@/component/molecules';
import { Image } from '@/component/atoms';
import { useSearchbox, useQueryParams } from '@/hook';

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

type Query = {
  search: string;
};

const Navigation = () => {
  const router = useRouter();
  const { getParams } = useQueryParams<Query>();

  const { search: querySearch } = getParams();

  const search = useSearchbox((state) => state.search);
  const clearSearch = useSearchbox((state) => state.clearSearch);

  const timer = useRef<any>(undefined);

  const goToMainPage = () => {
    clearSearch();
    const mainPath = `/`;
    router.push({
      pathname: mainPath,
    });
  };

  const goToSearchPage = useCallback(
    (newSearch: string) => {
      if (!newSearch) return;

      const resultPath = '/result';

      router.push({
        pathname: resultPath,
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
