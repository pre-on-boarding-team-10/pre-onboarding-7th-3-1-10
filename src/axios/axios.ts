import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosApi = async (keyword: string) => {
  const axiosData = await axiosInstance.get('sick', {
    params: {
      q: keyword,
    },
  });
  return axiosData;
};

axiosInstance.interceptors.request.use(
  config => {
    console.info('calling api');
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// axiosInstance.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );
