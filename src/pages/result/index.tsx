import React from 'react';
import { useRouter } from 'next/router';

import { Result } from '@/component/pages';

const ResultPage = () => {
  const router = useRouter();
  const { search } = router.query;

  return (
    <>
      <Result search={search as string} />
    </>
  );
};

export default ResultPage;
