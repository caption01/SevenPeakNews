import { create } from 'zustand';
import { map } from 'lodash';

import { axios } from '@/component/utils/axios';
import { NewsData } from '@/component/organisms';

type FetchResponse = {
  data: any;
  error?: string;
};

interface State {
  data: any;
  loading: boolean;
  error?: string;
  fetchResult: (search: string, orderBy: string) => Promise<void>;
}

async function fetch(
  path: string,
  search: string,
  orderBy: string
): Promise<FetchResponse> {
  const params = {
    q: search,
    page: 1,
    'page-size': 10,
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
    image: data?.fields?.thumbnail,
  };
}

export const useFetchResult = create<State>((set) => ({
  data: {},
  loading: false,
  error: undefined,
  fetchResult: async (search: string, orderBy: string) => {
    set({ loading: true });

    try {
      const path = '/search';
      const resultResponse = await fetch(path, search, orderBy);

      const resultData = map(resultResponse.data?.response?.results, transform);

      set({
        data: resultData,
      });
    } catch (error) {
      const msg = 'fetch result error';
      set({ error: msg });
    } finally {
      set({ loading: false });
    }
  },
}));
