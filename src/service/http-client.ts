import axios from 'axios';
import { NavigateFunction } from 'react-router';

export const httpClient = axios.create({ baseURL: import.meta.env.VITE_BACKEND_URL });

httpClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('token');
  if (config.headers) config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
  return config;
});

export const logout = (navigate: NavigateFunction) => (error: any) => {
  if (error?.status === 401) {
    localStorage.clear();
    navigate('/');
  }
  return error;
};
