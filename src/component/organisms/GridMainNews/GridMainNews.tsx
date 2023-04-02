import React from 'react';
import styled from 'styled-components';

import { NewsCard } from '@/component/molecules';

const GridMainContainer = styled.div`
  display: grid;
  gap: 2rem;

  grid-template-areas:
    'one one two three'
    'one one four five';

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
`;

const GridMainNews = () => {
  const newsTitle =
    'News of indictment catches Trump and his team off guard Trump and his team off guard Trump and his team off guard';
  const bodyText =
    'An article headlined “SNP’s Nicolson cleared of bullying ex-minister Dorries on Twitter” (30 March, p17) reported that it was understood John Nicolson MP had been cleared by parliament’s independent complaints and grievance scheme over tweets regarding the then culture secretary Nadine Dorries. Shortly after publication, the parliamentary standards commissioner, Daniel Greenberg, issued a statement saying that the case was “ongoing, and no decision has yet been made”.';

  return (
    <GridMainContainer>
      <NewsCard
        className="one"
        height="60rem"
        image="https://media.guim.co.uk/2b3d92521a3718880cf867b831357a6b8c605534/0_0_2816_1691/500.jpg"
        alt="image"
        title={newsTitle}
        describe={bodyText}
      />
      <NewsCard
        className="two"
        height="40rem"
        image="https://media.guim.co.uk/2b3d92521a3718880cf867b831357a6b8c605534/0_0_2816_1691/500.jpg"
        title={newsTitle}
      />
      <NewsCard
        className="three"
        height="40rem"
        image="https://media.guim.co.uk/2b3d92521a3718880cf867b831357a6b8c605534/0_0_2816_1691/500.jpg"
        title={newsTitle}
      />
      <NewsCard className="four" title={newsTitle} isShowPeakImage={false} />
      <NewsCard className="five" title={newsTitle} isShowPeakImage={false} />
    </GridMainContainer>
  );
};

export default GridMainNews;
