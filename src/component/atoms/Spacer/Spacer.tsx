import React from 'react';
import styled, { useTheme } from 'styled-components';

import * as CSSType from 'src/component/utils/csstype';
import { ColorKey } from 'src/component/utils/color';

interface StyleDiv {
  padding?: CSSType.Padding;
  margin?: CSSType.Margin;
  border?: CSSType.Border;
  backgroundColor?: ColorKey;
}

interface SpacerProps extends StyleDiv {}

const StyledDiv = styled.div<StyleDiv>`
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border: ${({ border }) => border};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Spacer = ({
  padding,
  margin,
  border,
  backgroundColor,
  ...props
}: SpacerProps) => {
  const { colors } = useTheme();

  let bgColor;

  if (backgroundColor) {
    bgColor = colors[backgroundColor] as ColorKey;
  }

  return (
    <StyledDiv
      padding={padding}
      margin={margin}
      border={border}
      backgroundColor={bgColor}
      {...props}
    />
  );
};

export default Spacer;
