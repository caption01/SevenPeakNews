import React from 'react';
import styled from 'styled-components';
import { isEmpty, map } from 'lodash';

import { NewsCard } from '@/component/molecules';

import { getSafeUndefind } from '@/component/utils/helper';
import { devices } from '@/component/utils/styled-component';

export type NewsData = {
  id: string;
  title: string;
  describe: string;
  image: string;
};

interface EqualNewsProps {
  news: NewsData[];
}

const GridEqualContainer = styled.div`
  display: grid;
  gap: 2rem;

  grid-template-columns: repeat(1, 1fr);

  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GridEqualNews = ({ news = [] }: EqualNewsProps) => {
  if (isEmpty(news)) {
    return <div />;
  }

  return (
    <GridEqualContainer>
      {map(news, (item) => {
        const newItem = getSafeUndefind(item, {});
        return (
          <NewsCard
            id={newItem.id}
            title={newItem.title}
            image={newItem.image}
            describe={newItem.describe}
            height="40rem"
            alt="image"
            isShowPeakImage
          />
        );
      })}
    </GridEqualContainer>
  );
};

export default GridEqualNews;
