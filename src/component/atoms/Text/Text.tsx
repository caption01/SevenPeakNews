import React from 'react';
import styled from 'styled-components';

import * as CSSType from '@/component/utils/csstype';
import { ColorKey } from '@/component/utils/color';

interface TextStyleProps {
  fontSize: CSSType.FontSize;
  fontWeight?: CSSType.FontWeight;
  color: ColorKey;
  padding?: CSSType.Padding;
  margin?: CSSType.Margin;
  display?: CSSType.Display;
}

interface TextProps extends TextStyleProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const StyledDiv = styled.div<TextStyleProps>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

const Text = ({
  fontSize,
  fontWeight,
  color,
  children,
  style,
  display,
  ...props
}: TextProps) => {
  return (
    <StyledDiv
      display={display}
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
