import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getSickApi = async (keyword: string) => {
  const sickData = await instance.get('sick', {
    params: {
      q: keyword,
    },
  });
  console.log('calling api');
  return sickData;
};
