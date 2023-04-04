import React, { useEffect } from 'react';

import { Navigation, GridArticleNews } from '@/component/organisms';
import { Layout, CenterSpinner } from '@/component/molecules';

import { useFetchArticle } from './useFetchArticle';

interface ArticleProps {
  newsId: string;
}

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
