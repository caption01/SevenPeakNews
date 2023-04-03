import { create } from 'zustand';
import dayjs from 'dayjs';
import { reduce } from 'lodash';

import { axios } from '@/component/utils/axios';
import { ArticleItem, ArticleBody } from '@/component/organisms';

type FetchResponse = {
  data: any;
  error?: string;
};

interface State {
  data: any;
  loading: boolean;
  error?: string;
  fetchArticle: (id: string) => Promise<void>;
}

async function fetch(id: string): Promise<FetchResponse> {
  const params = {
    'show-fields': 'thumbnail',
    'show-blocks': 'body',
    'show-elements': 'all',
  };

  return await axios.get(`/${id}`, { params });
}

const getBodyElements = (body = []): ArticleBody[] => {
  const elements = body[0]?.elements || [];

  return reduce(
    elements,
    (result, element) => {
      if (element.type !== 'text') return result;

      return [
        ...result,
        {
          element: 'div',
          type: element.type,
          html: element.textTypeData?.html,
        },
      ];
    },
    []
  );
};

const transform = (response = {}): ArticleItem => {
  const publicationDate = response?.content?.webPublicationDate;
  const title = response?.content?.webTitle;
  const body = response?.content?.blocks?.body || [];
  const image = response?.content?.fields?.thumbnail || 'peakLogo';

  const formatData = dayjs(publicationDate).format('ddd DD MMM YYYY HH:mm');

  return {
    publicationDate: formatData,
    title: title,
    body: getBodyElements(body),
    image: image,
  };
};

export const useFetchArticle = create<State>((set) => ({
  data: {},
  loading: false,
  error: undefined,
  fetchArticle: async (id: string) => {
    set({ loading: true });

    try {
      const articleResponse = await fetch(id);
      const articleData = articleResponse.data.response;

      set({
        data: transform(articleData),
      });
    } catch (error) {
      const msg = 'fetch article error';
      set({ error: msg });
    } finally {
      set({ loading: false });
    }
  },
}));
