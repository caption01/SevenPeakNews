import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';

import { Navigation, GridMainNews, GridEqualNews } from '@/component/organisms';
import { Layout, TopicSelector } from '@/component/molecules';
import { Text, Spinner } from '@/component/atoms';
import { useDropdown } from '@/hook';
import { NEW_FIRST, OLD_FIRST } from '@/component/utils/constant';

import { useFetchMain } from './useFetchMain';

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

const Main = () => {
  const data = useFetchMain((state) => state.data);
  const loading = useFetchMain((state) => state.loading);
  const fetchNews = useFetchMain((state) => state.fetchNews);

  const selectedOptions = useDropdown((state) => state.selected);

  const orderByValue = useMemo(() => selectedOptions.value, [selectedOptions]);

  const options = [
    { value: NEW_FIRST, label: 'Newest First' },
    { value: OLD_FIRST, label: 'Oldest First' },
  ];

  useEffect(() => {
    if (!orderByValue) return;
    fetchNews(orderByValue);
  }, [orderByValue]);

  const renderNews = () => {
    return (
      <>
        <GridMainNews news={data?.newsTopOneToFive} />
        <GridEqualNews news={data?.newsTopSixToEight} />
        <Text fontSize="6rem" color="black" fontWeight={'bold'}>
          Sports
        </Text>
        <GridEqualNews news={data?.sportTopThree} />
      </>
    );
  };

  return (
    <Layout>
      <Layout.Header>
        <Navigation />
      </Layout.Header>
      <Layout.Body>
        <TopicSelector options={options} defaultValue={NEW_FIRST} />
        {loading ? <CenterSpinner /> : renderNews()}
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default Main;
