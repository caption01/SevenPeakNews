import React from 'react';
import styled from 'styled-components';

import { Navigation, GridMainNews, GridEqualNews } from '@/component/organisms';
import { DropdownSelector, Layout } from '@/component/molecules';
import { Text } from '@/component/atoms';
import { useDropdown } from '@/hook';

const TopicSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = () => {
  const selectedOptions = useDropdown((state) => state.selected);

  const options = [
    { value: 'NEW_FIRST', label: 'Newest First' },
    { value: 'OLD_FIRST', label: 'Oldest First' },
    { value: 'POPULAR_FIRST', label: 'Most Popular' },
  ];

  return (
    <Layout>
      <Layout.Header>
        <Navigation />
      </Layout.Header>
      <Layout.Body>
        <TopicSelector>
          <Text fontSize="6rem" color="black" fontWeight={'bold'}>
            Top Stories
          </Text>
          <DropdownSelector options={options} defaultValue={'NEW_FIRST'} />
        </TopicSelector>
        <GridMainNews />
        <GridEqualNews />
        <Text fontSize="6rem" color="black" fontWeight={'bold'}>
          Sports
        </Text>
        <GridEqualNews />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default Main;
