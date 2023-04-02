import React from 'react';
import { useRouter } from 'next/router';

import { Article } from '@/component/pages';

const ArticlePage = () => {
  const router = useRouter();
  const query = router.query;

  console.log({ query });
  const newsId = query?.newsId;

  return (
    <>
      <Article />
    </>
  );
};

export default ArticlePage;
