import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Navigation, GridEqualNews } from '@/component/organisms';
import { DropdownSelector, Layout } from '@/component/molecules';
import { Text } from '@/component/atoms';
import { NEW_FIRST, OLD_FIRST } from '@/component/utils/constant';

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

const Result = ({ search }: ResultProps) => {
  const data = useFetchResult((state) => state.data);
  const loading = useFetchResult((state) => state.loading);
  const fetchResult = useFetchResult((state) => state.fetchResult);

  useEffect(() => {
    if (!search) return;

    fetchResult(search, NEW_FIRST);
  }, [search]);

  const onSelect = (value: string) => {
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
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default Result;
