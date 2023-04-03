import React from 'react';
import { useRouter } from 'next/router';

import { Result } from '@/component/pages';

const ResultPage = () => {
  const router = useRouter();
  const { search } = router.query;

  console.log('search with', { search });

  return (
    <>
      <Result />
    </>
  );
};

export default ResultPage;
