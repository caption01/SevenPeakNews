import React from 'react';

import { SearchIcon, Triangle, IconProps } from './asset';

const assets = {
  search: SearchIcon,
  triangle: Triangle,
};

export interface IconsProps extends IconProps {
  name: keyof typeof assets;
}

const Icon = ({
  name,
  size = '2rem',
  color = 'black',
  style,
  onClick,
  ...props
}: IconsProps) => {
  const icon = assets[name] || 'div';

  const pointer = !!onClick ? 'pointer' : 'none';

  return React.createElement(icon, {
    size,
    color,
    onClick,
    style: {
      cursor: pointer,
      ...style,
    },
    ...props,
  });
};

export default Icon;
