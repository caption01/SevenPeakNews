import React from 'react';
import styled from 'styled-components';

import { DropdownSelector } from '@/component/molecules';
import { Text } from '@/component/atoms';
import { devices } from '@/component/utils/styled-component';

interface TopicSelectorProps {
  options: any[];
  defaultValue?: any;
}

const TopicContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;

  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  text-align: center;

  @media ${devices.laptop} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: left;
  }
`;

const TopicSelector = ({ options = [], defaultValue }: TopicSelectorProps) => {
  return (
    <TopicContainer>
      <Text fontSize="6rem" color="black" fontWeight={'bold'}>
        Top Stories
      </Text>
      <DropdownSelector options={options} defaultValue={defaultValue} />
    </TopicContainer>
  );
};

export default TopicSelector;
