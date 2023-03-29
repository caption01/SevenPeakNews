import React from 'react';
import styled from 'styled-components';

import * as CSStype from '@/component/utils/csstype';
import { ColorKey } from '@/component/utils/color';

interface InputStyleProps {
  fontSize?: CSStype.FontSize;
  color?: ColorKey;
}

interface InputProps extends InputStyleProps {
  value?: string;
  placeholder?: string;
  autoFocus?: boolean;
  style?: React.CSSProperties;
  onChange: (value: string) => void;
  onEnter?: () => void;
  onBlur: () => void;
}

const StyledInput = styled.input<InputStyleProps>`
  display: block;
  outline: none;
  border: none;
  background-image: none;
  background-color: transparent;
  box-shadow: none;

  width: 100%;
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};

  &::placeholder {
    color: ${({ color }) => color};
  }
`;

const Input = ({
  value = '',
  placeholder = '',
  fontSize = '2rem',
  color = 'black',
  autoFocus = true,
  onChange,
  onEnter,
  onBlur,
  style,
  ...props
}: InputProps) => {
  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(inputValue);
  };

  const handleOnKeyboardDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    if (key === 'Enter') {
      onEnter?.();
    }
  };

  return (
    <StyledInput
      value={value}
      onChange={handleOnInputChange}
      onKeyDown={handleOnKeyboardDown}
      placeholder={placeholder}
      fontSize={fontSize}
      color={color}
      style={style}
      autoFocus={autoFocus}
      onBlur={onBlur}
      {...props}
    />
  );
};

export default Input;
