import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Navigation, GridArticleNews } from '@/component/organisms';
import { Layout } from '@/component/molecules';
import { Spinner } from '@/component/atoms';

import { useFetchArticle } from './useFetchArticle';

interface ArticleProps {
  newsId: string;
}

const SpinerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CenterSpinner = () => {
  return (
    <SpinerContainer>
      <Spinner size="5rem" />
    </SpinerContainer>
  );
};

const Article = ({ newsId }: ArticleProps) => {
  const data = useFetchArticle((state) => state.data);
  const loading = useFetchArticle((state) => state.loading);
  const fetchArticle = useFetchArticle((state) => state.fetchArticle);

  useEffect(() => {
    if (!newsId) return;

    fetchArticle(newsId);
  }, [newsId]);

  return (
    <Layout>
      <Layout.Header>
        <Navigation />
      </Layout.Header>
      <Layout.Body>
        {loading ? <CenterSpinner /> : <GridArticleNews article={data} />}
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default Article;
