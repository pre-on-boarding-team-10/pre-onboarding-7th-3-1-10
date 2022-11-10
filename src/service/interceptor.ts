import axios from 'axios';

const interceptor = axios.create({
  baseURL: 'https://front-server-7th-3-1-10.herokuapp.com',
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
