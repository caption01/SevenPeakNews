import React from 'react';
import styled, { useTheme } from 'styled-components';

import * as CSSType from 'src/component/utils/csstype';
import { ColorKey } from 'src/component/utils/color';

interface CardStyleProps {
  width?: CSSType.Width;
  height?: CSSType.Height;
  position?: CSSType.Position;
  padding?: CSSType.Padding;
  margin?: CSSType.Margin;
  backgroundColor?: ColorKey;
}

interface CardProps extends CardStyleProps {
  children: React.ReactNode;
}

const CardContainer = styled.div<CardStyleProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: ${({ position }) => position};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Card = ({
  width = '100%',
  height = 'auto',
  position = 'relative',
  padding,
  margin,
  backgroundColor,
  children,
  ...props
}: CardProps) => {
  const { colors } = useTheme();
  let bgColor;

  if (backgroundColor) {
    bgColor = colors[backgroundColor] as ColorKey;
  }

  return (
    <CardContainer
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      position={position}
      backgroundColor={bgColor}
      {...props}
    >
      {children}
    </CardContainer>
  );
};

export default Card;
