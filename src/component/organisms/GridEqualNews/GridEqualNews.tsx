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
  const bodyText =
    'An article headlined “SNP’s Nicolson cleared of bullying ex-minister Dorries on Twitter” (30 March, p17) reported that it was understood John Nicolson MP had been cleared by parliament’s independent complaints and grievance scheme over tweets regarding the then culture secretary Nadine Dorries. Shortly after publication, the parliamentary standards commissioner, Daniel Greenberg, issued a statement saying that the case was “ongoing, and no decision has yet been made”.';

  return (
    <GridEqualContainer>
      <NewsCard
        height="40rem"
        image="https://media.guim.co.uk/2b3d92521a3718880cf867b831357a6b8c605534/0_0_2816_1691/500.jpg"
        alt="image"
        title={newsTitle}
        describe={bodyText}
      />
      <NewsCard
        height="40rem"
        image="https://media.guim.co.uk/2b3d92521a3718880cf867b831357a6b8c605534/0_0_2816_1691/500.jpg"
        title={newsTitle}
      />
      <NewsCard
        height="40rem"
        image="https://media.guim.co.uk/2b3d92521a3718880cf867b831357a6b8c605534/0_0_2816_1691/500.jpg"
        title={newsTitle}
      />
    </GridEqualContainer>
  );
};

export default GridMainNews;
