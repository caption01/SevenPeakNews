import React from 'react';
import styled from 'styled-components';

import { Text, Image, Spacer } from '@/component/atoms';

interface ArticleProps {
  publicationDate: string;
  title: string;
  image: string;
  body: [];
}

const GridArticleContainer = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-columns: 2fr 1fr;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
`;

const TextWrapper = styled.div`
  margin: 2rem 0 4rem 0;

  a {
    text-decoration: none;
    color: black;
  }
`;

const GridArticleNews = ({ article }: { article: ArticleProps }) => {
  const body = article.body;
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
          {body.map((item, index) => (
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
