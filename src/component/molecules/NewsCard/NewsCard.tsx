import React from 'react';
import styled from 'styled-components';
import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';

import { Card, Image, ImageProps, Text, Spacer } from 'src/component/atoms';
import * as CSSType from 'src/component/utils/csstype';
import { useSearchbox } from '@/hook';

interface StyleDiv {
  height: CSSType.Height;
}

const ImageContainer = styled.div<StyleDiv>`
  position: relative;
  width: 100%;
  height: ${({ height }) => `calc(${height} - 15rem)`};
`;

const TextContainer = styled.div`
  width: 100%;
  height: 15rem;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  line-height: normal;
  overflow: hidden;
`;

const SpacerContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  z-index: 2;
`;

const NewsCard = ({
  width = '100%',
  height = '30rem',
  image = '',
  alt = '',
  id = '',
  title = '',
  describe = '',
  isShowPeakImage = false,
  ...props
}) => {
  const router = useRouter();
  const clearSearch = useSearchbox((state) => state.clearSearch);

  let imageProps = {} as ImageProps;

  const goToArticle = (): void => {
    clearSearch();
    router.push(`/article?newsId=${id}`);
  };

  if (image) {
    imageProps = {
      name: image,
      alt: alt,
      fill: true,
    };
  }

  if (isShowPeakImage && !image) {
    imageProps = {
      name: 'peakLogo',
      alt: alt,
      objectFit: 'contain',
      style: {
        width: '70%',
        height: '100%',
        margin: 'auto',
      },
    };
  }

  return (
    <Card
      width={width}
      height={'auto'}
      margin="1rem"
      backgroundColor={'darkBlue'}
      onClick={goToArticle}
      padding={'0 0 1rem 0'}
      {...props}
    >
      {!isEmpty(imageProps) && (
        <ImageContainer height={height}>
          <Image {...imageProps} alt={imageProps.alt} />
        </ImageContainer>
      )}
      <TextContainer>
        <Text
          fontSize={'3rem'}
          color="white"
          fontWeight={'bold'}
          padding="1rem"
        >
          {title}
        </Text>
        <Text fontSize={'2rem'} color="white" padding="0 1rem">
          {describe}
        </Text>
      </TextContainer>
      <SpacerContainer>
        <Spacer padding="0.2rem 0" backgroundColor="red" />
      </SpacerContainer>
    </Card>
  );
};

export default NewsCard;
