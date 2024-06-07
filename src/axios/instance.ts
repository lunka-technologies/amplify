import { LOCAL_JWT_KEY } from '../constants/localHostConstants';
import { router } from '../router/router';
import { ROUTE_MAIN } from '../router/routes';
import axios, { AxiosError } from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use((request) => {
  const jwtToken = localStorage.getItem(LOCAL_JWT_KEY);

  if (jwtToken) request.headers.set('Authorization', `Bearer ${jwtToken}`);

  return request;
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error instanceof AxiosError) {
      const errorsStatus =
        error.response?.status === 401 || error.response?.status === 403;
      // Unauthorized
      if (errorsStatus) {
        localStorage.removeItem(LOCAL_JWT_KEY);

        router.navigate(ROUTE_MAIN);
      }
    }
    console.log(error);

    return Promise.reject(error);
  }
);
