import { useState, useEffect } from 'react';
import { create } from 'zustand';
import { slice } from 'lodash';

import { axios } from '@/component/utils/axios';
import { GridMainNews, NewsData } from '@/component/organisms';

type FetchResponse = {
  data: any;
  error?: string;
};

interface State {
  data: any;
  loading: boolean;
  error?: string;
  fetchNews: (orderBy: string) => Promise<void>;
}

async function fetch(
  path: string,
  section: string,
  orderBy: string
): Promise<FetchResponse> {
  const params = {
    section: section,
    page: 1,
    'page-size': 10,
    'order-by': orderBy,
    'show-elements': 'thumbnail,body',
    'show-fields': 'all',
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

export const useFetchMain = create<State>((set) => ({
  data: {},
  loading: false,
  error: undefined,
  fetchNews: async (orderBy: string) => {
    set({ loading: true });

    try {
      const path = '/search';
      const newsResponse = await fetch(path, 'news', orderBy);
      const sportResponse = await fetch(path, 'sport', orderBy);

      const newsData = newsResponse.data?.response?.results.map(transform);
      const sportData = sportResponse.data?.response?.results.map(transform);

      const topOneToFive = slice(newsData, 0, 5);
      const topSixToEight = slice(newsData, 5, 8);
      const topThree = slice(sportData, 0, 3);

      set({
        data: {
          newsTopOneToFive: topOneToFive,
          newsTopSixToEight: topSixToEight,
          sportTopThree: topThree,
        },
      });
    } catch (error) {
      const msg = 'fetch news error';
      set({ error: msg });
    } finally {
      set({ loading: false });
    }
  },
}));
