import React from 'react';
import styled from 'styled-components';
import { isEmpty } from 'lodash';

import { NewsCard } from '@/component/molecules';
import { getSafeUndefind } from '@/component/utils/helper';

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

  grid-template-columns: repeat(3, 1fr);
`;

const GridEqualNews = ({ news = [] }: EqualNewsProps) => {
  if (isEmpty(news)) {
    return <div />;
  }

  let [one, two, three] = news;

  one = getSafeUndefind(one, {});
  two = getSafeUndefind(two, {});
  three = getSafeUndefind(three, {});

  return (
    <GridEqualContainer>
      <NewsCard
        id={one.id}
        title={one.title}
        image={one.image}
        describe={one.describe}
        height="40rem"
        alt="image"
        isShowPeakImage
      />
      <NewsCard
        id={two.id}
        title={two.title}
        image={two.image}
        describe={two.describe}
        height="40rem"
        isShowPeakImage
      />
      <NewsCard
        id={three.id}
        title={three.title}
        image={three.image}
        describe={three.describe}
        height="40rem"
        isShowPeakImage
      />
    </GridEqualContainer>
  );
};

export default GridEqualNews;
