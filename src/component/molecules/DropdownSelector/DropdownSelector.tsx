import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Icon, Text } from '@/component/atoms';
import { useDropdown } from '@/hook';

type OptionValue = number | string | boolean;

type Option = {
  label: string;
  value: OptionValue;
};

interface OptionStyleProps {
  active: boolean;
}

interface OptionProps extends OptionStyleProps {
  key?: React.Key;
  label: string;
  onClick: () => void;
}

interface SelectorProps {
  options: Option[];
  defaultValue?: number | string | boolean;
  onChange?: (value: OptionValue, selected: Option) => void;
}

const SelectorContainer = styled.div`
  position: relative;
  min-width: 30rem;
  cursor: pointer;
`;

const SelectorItemContainer = styled.div`
  position: relative;
`;

const OptionItemContainer = styled.div<OptionStyleProps>`
  position: absolute;
  z-index: 10;
  top: 1rem;
  left: 0;
  width: 100%;
  height: ${({ active }) => (active ? '30rem' : 0)};

  overflow: scroll;

  transition: all 0.2s;
`;

const OptionItem = styled.div<OptionStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 2rem;

  svg {
    transform: rotate(${({ active }) => (active ? 0 : '180deg')});
    transition: all 0.4s;
  }
`;

const WrapperSelectedOption = styled.div`
  border-bottom: 0.1rem solid black;
`;

const WrapperOption = styled.div`
  border: 0.1rem solid black;
  background-color: ${({ theme }) => theme.colors.white};
`;

const SelectedOption = ({ active, label, onClick }: OptionProps) => {
  return (
    <OptionItem active={active} onClick={onClick}>
      <Text fontSize={'3rem'} color="black">
        {!!label ? label : 'please select option'}
      </Text>
      <Icon name="triangle" size={'1rem'} color="black" />
    </OptionItem>
  );
};

const Option = ({ active, label, onClick }: OptionProps) => {
  return (
    <OptionItem active={active} onClick={onClick}>
      <Text fontSize={'3rem'} color="black">
        {label}
      </Text>
    </OptionItem>
  );
};

const DropdownSelector = ({
  options = [],
  defaultValue,
  onChange,
}: SelectorProps) => {
  const active = useDropdown((state) => state.active);
  const setActive = useDropdown((state) => state.setActive);
  const setSelected = useDropdown((state) => state.setSelected);
  const selected = useDropdown((state) => state.selected);

  const toggle = () => setActive(!active);

  useEffect(() => {
    if (!defaultValue) return;

    const selected = findOptions(options, defaultValue);

    if (!!selected) {
      setSelected(selected);
    }
  }, [defaultValue]);

  const onOptionItemClick = (value: OptionValue) => {
    const selected = findOptions(options, value) as Option;

    setActive(!active);
    setSelected(selected);

    onChange?.(selected.value, selected);
  };

  return (
    <SelectorContainer>
      <WrapperSelectedOption>
        <SelectedOption
          label={selected.label}
          onClick={toggle}
          active={active}
        />
      </WrapperSelectedOption>
      <SelectorItemContainer>
        <OptionItemContainer active={active}>
          <WrapperOption>
            {options.map((option) => {
              const key = `${option.label}-${option.value}`;
              return (
                <Option
                  key={key}
                  label={option.label}
                  active={false}
                  onClick={() => onOptionItemClick(option.value)}
                />
              );
            })}
          </WrapperOption>
        </OptionItemContainer>
      </SelectorItemContainer>
    </SelectorContainer>
  );
};

const findOptions = (option: Option[] = [], value: OptionValue) => {
  return option.find((item) => item.value === value);
};

export default DropdownSelector;
