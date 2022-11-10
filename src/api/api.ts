import axios from 'axios';
const baseURL = 'http://localhost:4000/sick';

export async function getSerch(payload: object) {
  return await axios.get(baseURL, { params: payload });
}
