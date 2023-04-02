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
  onClick?: () => void;
}

const CardContainer = styled.div<CardStyleProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: ${({ position }) => position};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  background-color: ${({ backgroundColor }) => backgroundColor};

  cursor: ${({ onClick }) => onClick && 'pointer'};

  transition: all 0.2s;

  &:hover {
    transform: ${({ onClick }) => onClick && 'translateY(-0.5rem)'};
    box-shadow: ${({ onClick }) =>
      onClick && 'rgba(0, 0, 0, 0.35) 0rem 0.5rem 1.5rem'};
  }
`;

const Card = ({
  width = '100%',
  height = 'auto',
  position = 'relative',
  padding,
  margin,
  backgroundColor,
  onClick = undefined,
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
      onClick={onClick}
      {...props}
    >
      {children}
    </CardContainer>
  );
};

export default Card;
