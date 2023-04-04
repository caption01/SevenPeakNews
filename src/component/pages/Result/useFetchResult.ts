import { create } from 'zustand';
import { map } from 'lodash';

import { axios } from '@/component/utils/axios';
import { NewsData } from '@/component/organisms';

type FetchResponse = {
  data: any;
  error?: string;
};

type FetchCondition = {
  search: string;
  page: number;
  orderBy: string;
};
interface State {
  data: any;
  loading: boolean;
  error?: string;
  condition: FetchCondition;
  limit: boolean;
  fetchResult: (search: string, orderBy: string) => Promise<void>;
  fetchNextResult: () => Promise<void>;
}

async function fetch(
  path: string,
  condition: FetchCondition
): Promise<FetchResponse> {
  const { search, page, orderBy } = condition;

  const params = {
    q: search,
    page: page,
    'page-size': 15,
    'order-by': orderBy,
    'show-fields': 'thumbnail,body',
    'show-elements': 'all',
  };

  return await axios.get(path, { params });
}

function transform(data: any): NewsData {
  return {
    id: data?.id,
    title: data.webTitle,
    describe: data?.fields?.bodyText,
    image: data?.fields?.thumbnail || 'peakLogo',
  };
}

function checkIsLitmitResult(currentPage: number, response: any): boolean {
  return currentPage >= response?.pages;
}

export const useFetchResult = create<State>((set, get) => ({
  data: {},
  loading: false,
  error: undefined,
  condition: { search: '', orderBy: '', page: 1 },
  limit: false,
  fetchResult: async (search: string, orderBy: string) => {
    set({ loading: true });

    const fetchCondition = {
      search,
      orderBy,
      page: 1,
    };

    set({ condition: fetchCondition });
    set({ limit: false });

    try {
      const path = '/search';
      const resultResponse = await fetch(path, fetchCondition);

      const resultData = map(resultResponse.data?.response?.results, transform);

      set({ data: resultData });
    } catch (error) {
      const msg = 'fetch result error';
      set({ error: msg });
    } finally {
      set({ loading: false });
    }
  },
  fetchNextResult: async () => {
    set({ loading: true });
    const condition = get().condition;
    const data = get().data;
    const limit = get().limit;

    if (limit) return;

    const nextPage = condition.page + 1;

    const fetchCondition = {
      ...condition,
      page: nextPage,
    };

    set({ condition: fetchCondition });

    try {
      const path = '/search';
      const resultResponse = await fetch(path, fetchCondition);

      const isLimit = checkIsLitmitResult(
        fetchCondition.page,
        resultResponse.data?.response
      );

      set({ limit: isLimit });

      const resultData = map(resultResponse.data?.response?.results, transform);

      set({ data: [...data, ...resultData] });
    } catch (error) {
      const msg = 'fetch result error';
      set({ error: msg });
    } finally {
      set({ loading: false });
    }
  },
}));
