import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${localStorage}`,
  },
  //   withCredentials: true,
});

axiosInstance.interceptors.request.use((request) => {
  const jwtToken = localStorage.getItem('jwt-token');

  if (jwtToken) request.headers.set('Authorization', `Bearer ${jwtToken}`);

  return request;
});

// axiosInstance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     if (error instanceof AxiosError) {
//       // Unauthorized
//       if (error.response?.status === 401) {
//         router.navigate(routes.login);
//       }
//     }
//     console.log(error);

//     return Promise.reject(error);
//   }
// );
