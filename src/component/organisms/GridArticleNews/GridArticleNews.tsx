import React from 'react';
import styled from 'styled-components';
import { map } from 'lodash';

import { Text, Image, Spacer } from '@/component/atoms';
import { devices } from '@/component/utils/styled-component';

export type ArticleBody = {
  element: string;
  type: string;
  html: string;
};

export type ArticleItem = {
  publicationDate: string;
  title: string;
  image: string;
  body: ArticleBody[];
};
interface ArticleProps {
  article: ArticleItem;
}

const GridArticleContainer = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr;

  @media ${devices.desktop} {
    grid-template-columns: 2fr 1fr;
    grid-auto-flow: row;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  background-color: ${({ theme }) => theme.colors.darkBlue};

  @media ${devices.tablet} {
    width: 80%;
    justify-self: center;
  }

  @media ${devices.desktop} {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  margin: 2rem 0 4rem 0;

  a {
    text-decoration: none;
    color: black;
  }
`;

const GridArticleNews = ({ article }: ArticleProps) => {
  return (
    <React.Fragment>
      <GridArticleContainer>
        <div>
          <Text fontSize={'2rem'} color="black" margin={'0 0 1rem 0'}>
            {article.publicationDate}
          </Text>
          <Text
            fontSize={'4rem'}
            fontWeight={'bold'}
            color="black"
            margin={'0 0 1rem 0'}
          >
            {article.title}
          </Text>
          <Spacer padding="0.1rem 0" backgroundColor="grey" />
        </div>
        <div />
      </GridArticleContainer>

      <GridArticleContainer>
        <div>
          {map(article.body, (item, index) => (
            <TextWrapper key={index}>
              <Text fontSize={'3rem'} color="black">
                <div dangerouslySetInnerHTML={{ __html: item.html }} />
              </Text>
            </TextWrapper>
          ))}
        </div>
        <ImageContainer>
          <Image name={article.image} alt="image" fill />
        </ImageContainer>
      </GridArticleContainer>
    </React.Fragment>
  );
};

export default GridArticleNews;
