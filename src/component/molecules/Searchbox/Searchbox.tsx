import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Icon, Input } from '@/component/atoms';
import { useSearchbox } from '@/hook';

interface BoxStyledProps {
  active: boolean;
}

interface SearchboxProps {
  intitalValue?: string | string[];
  onSearchChange?: (val: string) => void;
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

const Searchbox = ({ intitalValue, onSearchChange }: SearchboxProps) => {
  const [active, setActive] = useState(false);

  const search = useSearchbox((state) => state.search);
  const setSearch = useSearchbox((state) => state.setSearch);

  const onSearchboxChange = (value: string) => {
    setSearch(value);
    onSearchChange?.(value);
  };

  const open = () => {
    setActive(true);
  };

  const close = () => {
    setActive(false);
  };

  useEffect(() => {
    if (Array.isArray(intitalValue) || !intitalValue) return;
    setSearch(intitalValue);
  }, [setSearch, intitalValue]);

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
        <Icon
          name="search"
          size={'2.5rem'}
          color="white"
          onClick={() => open()}
        />
      </IconWrapper>
    </Box>
  );
};

export default Searchbox;
