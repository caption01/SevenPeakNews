import React from 'react';
import styled from 'styled-components';

import { Navigation, GridMainNews } from '@/component/organisms';
import { DropdownSelector } from '@/component/molecules';
import { Text } from '@/component/atoms';

const Layout = styled.div`
  width: 100%;
`;

const Container = styled.div`
  margin: 5rem 10%;
`;

const TopicSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = () => {
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
      <Navigation spaceX={80} />
      <Container>
        <TopicSelector>
          <Text fontSize="6rem" color="black" fontWeight={'bold'}>
            Top Stories
          </Text>
          <DropdownSelector
            options={options}
            defaultValue={'NEW_FIRST'}
            onChange={onSelect}
          />
        </TopicSelector>
        <GridMainNews />
      </Container>
    </Layout>
  );
};

export default Main;
