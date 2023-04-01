import React from 'react';
import styled from 'styled-components';

import { NewsCard } from '@/component/molecules';

const GridEqualContainer = styled.div`
  display: grid;
  gap: 2rem;

  grid-template-columns: repeat(3, 1fr);
`;

const GridMainNews = () => {
  const newsTitle =
    'News of indictment catches Trump and his team off guard Trump and his team off guard Trump and his team off guard';

  return (
    <GridEqualContainer>
      <NewsCard
        height="40rem"
        image="https://media.guim.co.uk/2b3d92521a3718880cf867b831357a6b8c605534/0_0_2816_1691/500.jpg"
        alt="image"
        title={newsTitle}
      />
      <NewsCard
        height="40rem"
        image="https://media.guim.co.uk/2b3d92521a3718880cf867b831357a6b8c605534/0_0_2816_1691/500.jpg"
        title={newsTitle}
      />
      <NewsCard height="40rem" title={newsTitle} isShowPeakImage />
    </GridEqualContainer>
  );
};

export default GridMainNews;
