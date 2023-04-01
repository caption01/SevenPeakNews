import React from 'react';
import styled from 'styled-components';

import { Navigation, GridMainNews, GridEqualNews } from '@/component/organisms';
import { DropdownSelector, Layout } from '@/component/molecules';
import { Text } from '@/component/atoms';

const TopicSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const Result = () => {
  const onSelect = (value: any, selected: object) => {
    console.log('hi');
  };

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
            Search result
          </Text>
          <DropdownSelector
            options={options}
            defaultValue={'NEW_FIRST'}
            onChange={onSelect}
          />
        </TopicSelector>
        <GridEqualNews />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default Result;
