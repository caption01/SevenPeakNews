import React from 'react';
import styled from 'styled-components';

import * as CSSType from '@/component/utils/csstype';
import { ColorKey } from '@/component/utils/color';

interface TextStyleProps {
  fontSize: CSSType.FontSize;
  fontWeight: CSSType.FontWeight;
  color: ColorKey;
}

interface TextProps extends TextStyleProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const StyledDiv = styled.div<TextStyleProps>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
`;

const Text = ({
  fontSize,
  fontWeight,
  color,
  children,
  style,
  ...props
}: TextProps) => {
  return (
    <StyledDiv
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      style={style}
      {...props}
    >
      {children}
    </StyledDiv>
  );
};

export default Text;
