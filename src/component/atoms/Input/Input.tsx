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
  style,
  ...props
}: InputProps) => {
  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(inputValue);
  };

  return (
    <StyledInput
      value={value}
      onChange={handleOnInputChange}
      placeholder={placeholder}
      fontSize={fontSize}
      color={color}
      style={style}
      autoFocus={autoFocus}
      {...props}
    />
  );
};

export default Input;
