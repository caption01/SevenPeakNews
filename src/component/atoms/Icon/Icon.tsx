import React from 'react';

import { SearchIcon, IconProps } from './asset';

const assets = {
  search: SearchIcon,
};

export interface IconsProps extends IconProps {
  name: keyof typeof assets;
}

const Icon = ({ name, size = '2rem', color, style, ...props }: IconsProps) => {
  const icon = assets[name] || 'div';

  return React.createElement(icon, {
    size,
    color,
    style,
    ...props,
  });
};

export default Icon;
