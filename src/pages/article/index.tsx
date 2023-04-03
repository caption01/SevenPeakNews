import React from 'react';
import { useRouter } from 'next/router';

import { Article } from '@/component/pages';

const ArticlePage = () => {
  const router = useRouter();
  const query = router.query;

  const newsId = query?.newsId as string;

  return (
    <>
      <Article newsId={newsId} />
    </>
  );
};

export default ArticlePage;
