import React from 'react';
import styled from 'styled-components';

import { DropdownSelector } from '@/component/molecules';
import { Text } from '@/component/atoms';

const Container = styled.div`
  margin: 5rem 10%;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NewsOverview = () => {
  const onSelect = (value: any, selected: object) => {
    console.log('hi');
  };

  const mock = [
    { value: 1, label: 'hello' },
    { value: 2, label: 'noo' },
    { value: 3, label: 'bad' },
  ];

  return (
    <Container>
      <HeaderContainer>
        <Text fontSize="6rem" color="black" fontWeight={'bold'}>
          Top Stories
        </Text>
        <DropdownSelector options={mock} defaultValue={2} onChange={onSelect} />
      </HeaderContainer>
      <div>
        <div>news</div>
        <div>news</div>
        <div>news</div>
        <div>news</div>
      </div>
    </Container>
  );
};

export default NewsOverview;
