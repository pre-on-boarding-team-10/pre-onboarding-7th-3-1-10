import axios, { AxiosAdapter } from 'axios';

const interceptor = axios.create({
  baseURL: 'http://localhost:4000',
});

interceptor.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

interceptor.interceptors.response.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default interceptor;
