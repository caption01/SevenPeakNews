import React from 'react';
import NextImage from 'next/image';

import * as cssType from '../../utils/csstype';
import { peakLogo } from './assets';

const assets = {
  peakLogo: peakLogo,
};

interface ImageProps {
  name: keyof typeof assets;
  alt: string;
  style?: React.CSSProperties;
  objectFit?: cssType.objectFit;
}

const Image = ({
  name = 'peakLogo',
  alt = 'image',
  objectFit = 'fill',
  style,
  ...props
}: ImageProps) => {
  const img = assets[name];

  return (
    <NextImage
      fill
      src={img}
      alt={alt}
      style={{ objectFit, ...style }}
      {...props}
    />
  );
};

export default Image;
