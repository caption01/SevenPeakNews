import React, { useState } from 'react';
import styled from 'styled-components';

import { Icon, Input } from '@/component/atoms';

interface BoxStyledProps {
  active: boolean;
}

const Box = styled.div<BoxStyledProps>`
  position: relative;
  display: flex;
  align-items: center;

  padding: 1rem 1.5rem;
  width: ${({ active }) => (active ? '30rem' : '10rem')};
  height: 5rem;
  background-color: ${({ active, theme }) => active && theme.colors.skyBlue};
  opacity: ${({ active }) => active && 0.8};
  border-bottom: ${({ theme }) => `0.3rem solid ${theme.colors.white}`};
  border-radius: 0.2rem;

  transition: all 0.3s;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 5rem;
  transform: translate(50%, -50%);
`;

const Searchbox = () => {
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState('');

  const onSearchboxChange = (value: string) => {
    setSearch(value);
  };

  const open = () => {
    setActive(true);
  };

  const close = () => {
    setActive(false);
  };

  return (
    <Box active={active}>
      {active && (
        <Input
          value={search}
          placeholder="Search all news"
          onChange={onSearchboxChange}
          onEnter={close}
          fontSize="2rem"
          color="white"
          autoFocus
          onBlur={() => close()}
        />
      )}
      <IconWrapper>
        <Icon name="search" size={'2.5rem'} onClick={() => open()} />
      </IconWrapper>
    </Box>
  );
};

export default Searchbox;
