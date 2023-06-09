import React from 'react';
import styled from 'styled-components';
import { isEmpty } from 'lodash';

import { NewsCard } from '@/component/molecules';
import { getSafeUndefind } from '@/component/utils/helper';
import { devices } from '@/component/utils/styled-component';

export type NewsData = {
  id: string;
  title: string;
  describe: string;
  image: string;
};

interface MainNewsProps {
  news: NewsData[];
}

const GridMainContainer = styled.div`
  display: grid;
  gap: 2rem;

  grid-template-areas:
    'one'
    'two'
    'three'
    'four'
    'five';

  .one {
    grid-area: one;
  }

  .two {
    grid-area: two;
  }

  .three {
    grid-area: three;
  }

  .four {
    grid-area: four;
  }

  .five {
    grid-area: five;
  }

  @media ${devices.tablet} {
    grid-template-areas:
      'one one'
      'one one'
      'two three'
      'four five';
  }

  @media ${devices.desktop} {
    grid-template-areas:
      'one one two three'
      'one one four five';
  }
`;

const GridMainNews = ({ news = [] }: MainNewsProps) => {
  if (isEmpty(news)) {
    return <div />;
  }

  let [one, two, three, four, five] = news;

  one = getSafeUndefind(one, {});
  two = getSafeUndefind(two, {});
  three = getSafeUndefind(three, {});
  four = getSafeUndefind(four, {});
  five = getSafeUndefind(five, {});

  return (
    <GridMainContainer>
      <NewsCard
        id={one.id}
        title={one.title}
        describe={one.describe}
        image={one.image}
        className="one"
        height="60rem"
        alt="image"
        isShowPeakImage
        bottomColor="green"
      />
      <NewsCard
        id={two.id}
        title={two.title}
        image={two.image}
        className="two"
        height="40rem"
        isShowPeakImage
        bottomColor="red"
      />
      <NewsCard
        id={three.id}
        title={three.title}
        image={three.image}
        className="three"
        height="40rem"
        isShowPeakImage
        bottomColor="yello"
      />
      <NewsCard
        id={four.id}
        title={four.title}
        className="four"
        isShowPeakImage={false}
        bottomColor="skyBlue"
      />
      <NewsCard
        id={five.id}
        title={five.title}
        className="five"
        isShowPeakImage={false}
        bottomColor="green"
      />
    </GridMainContainer>
  );
};

export default GridMainNews;
