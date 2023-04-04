import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Navigation, GridEqualNews } from '@/component/organisms';
import { DropdownSelector, Layout } from '@/component/molecules';
import { Text, Spinner } from '@/component/atoms';
import { NEW_FIRST, OLD_FIRST } from '@/component/utils/constant';
import { useScroll, useDropdown } from '@/hook';

import { useFetchResult } from './useFetchResult';

interface ResultProps {
  search: string;
}

const TopicSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const SpinerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CenterSpinner = () => {
  return (
    <SpinerContainer>
      <Spinner size="5rem" />
    </SpinerContainer>
  );
};

const Result = ({ search }: ResultProps) => {
  const data = useFetchResult((state) => state.data);
  const loading = useFetchResult((state) => state.loading);
  const fetchResult = useFetchResult((state) => state.fetchResult);
  const fetchNextResult = useFetchResult((state) => state.fetchNextResult);
  const selectedOption = useDropdown((state) => state.selected);

  const { isBottom } = useScroll({ offsetFromBottom: 20 });

  useEffect(() => {
    if (!search) return;

    let defaultOrder = NEW_FIRST;

    if (selectedOption?.value) {
      defaultOrder = selectedOption?.value;
    }

    fetchResult(search, defaultOrder);
  }, [search]);

  useEffect(() => {
    if (isBottom) {
      fetchNextResult();
    }
  }, [isBottom]);

  const onSelect = (value: any) => {
    fetchResult(search, value);
  };

  const options = [
    { value: NEW_FIRST, label: 'Newest First' },
    { value: OLD_FIRST, label: 'Oldest First' },
  ];

  return (
    <Layout>
      <Layout.Header>
        <Navigation />
      </Layout.Header>
      <Layout.Body>
        <TopicSelector>
          <Text fontSize="6rem" color="black" fontWeight={'bold'}>
            Search result
          </Text>
          <DropdownSelector
            options={options}
            defaultValue={NEW_FIRST}
            onChange={onSelect}
          />
        </TopicSelector>
        <GridEqualNews news={data} />
        {loading && <CenterSpinner />}
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default Result;
