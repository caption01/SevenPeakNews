import { useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/router';
import queryString from 'query-string';

interface QueryParams<Q> {
  getParams: () => Q;
}

export function useQueryParams<Q>(): QueryParams<Q> {
  const router = useRouter();
  const paramsRef = useRef<Q>({});

  const query = router.query;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = window.location.search;
      const params = toParamsObject(searchParams);
      paramsRef.current = params;
    }
  }, [query]);

  const toParamsObject = useCallback((params: string) => {
    return queryString.parse(params);
  }, []);

  return {
    getParams() {
      return paramsRef.current;
    },
  };
}
