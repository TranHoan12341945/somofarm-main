import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://apibeswp.bellybabe.site/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
