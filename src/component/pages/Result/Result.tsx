import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Navigation, GridEqualNews } from '@/component/organisms';
import { Layout, TopicSelector } from '@/component/molecules';
import { Spinner } from '@/component/atoms';
import { NEW_FIRST, OLD_FIRST } from '@/component/utils/constant';
import { useScroll, useDropdown } from '@/hook';

import { useFetchResult } from './useFetchResult';

interface ResultProps {
  search: string;
}

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

  const [isMounted, setIsMounted] = useState(false);

  const { isBottom } = useScroll({ offsetFromBottom: 20 });

  useEffect(() => {
    if (!search || !isMounted) return;

    const orderBy = selectedOption?.value;

    fetchResult(search, orderBy);
  }, [search, selectedOption]);

  useEffect(() => {
    fetchResult(search, NEW_FIRST);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isBottom) {
      fetchNextResult();
    }
  }, [isBottom]);

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
        <TopicSelector options={options} defaultValue={NEW_FIRST} />

        <GridEqualNews news={data} />
        {loading && <CenterSpinner />}
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default Result;
