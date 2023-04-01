import React from 'react';
import NextImage, { StaticImageData } from 'next/image';

import * as CSSType from '../../utils/csstype';
import { peakLogo, newsImage } from './assets';

type AssetsKey = keyof typeof assets;

const assets = {
  peakLogo: peakLogo,
  newsImage: newsImage,
};

interface ImageProps {
  name: string | AssetsKey;
  alt: string;
  style?: React.CSSProperties;
  objectFit?: CSSType.ObjectFit;
}

const Image = ({
  name = '',
  alt = '',
  objectFit = 'fill',
  style,
  ...props
}: ImageProps) => {
  let img;

  if (isLocalAsset(name)) {
    const localAsset = name as AssetsKey;
    const localImage = assets[localAsset];
    img = localImage;
  } else {
    img = name;
  }

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

function isLocalAsset(name: string | AssetsKey): boolean {
  return Object.keys(assets).includes(name);
}

export default Image;
