import React, { useState } from 'react';
import styled from 'styled-components';

import { Icon, Input } from '@/component/atoms';

interface BoxStyledProps {
  active: boolean;
}

const Box = styled.div<BoxStyledProps>`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;

  padding: 1rem 1.5rem;
  width: ${({ active }) => (active ? '30rem' : '10rem')};
  background-color: ${({ active, theme }) => active && theme.colors.skyBlue};
  border-bottom: ${({ theme }) => `0.3rem solid ${theme.colors.white}`};

  transition: all 0.3s;
`;

const Searchbox = () => {
  const [active, setActive] = useState(false);

  const onSearchboxChange = (value: string) => {
    console.log({ value });
  };

  const toggle = () => {
    setActive(!active);
  };

  return (
    <Box onClick={() => toggle()} active={active}>
      {active && (
        <Input
          value="hello"
          placeholder="Search all news"
          onChange={onSearchboxChange}
          fontSize="2rem"
          color=""
        />
      )}
      <Icon name="search" size={'2.2rem'} />
    </Box>
  );
};

export default Searchbox;
