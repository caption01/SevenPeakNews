import Axios from 'axios';

const API_KEY = '72cd7093-1993-478b-bb0b-888743fcdd3e';
const BASE_URL = 'https://content.guardianapis.com/';

const axios = Axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

axios.interceptors.request.use(
  function (config) {
    if (config.params) {
      config.params = {
        ...config.params,
        'api-key': API_KEY,
      };
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { axios };
