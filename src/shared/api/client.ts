import axios from "axios";

const clientApi = axios.create({
  baseURL: 'https://your.api.base.url',
  headers: {
    'Content-Type': 'application/json',
  },
});

clientApi.interceptors.request.use(request => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    request.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return request;
}, error => {
  return Promise.reject(error);
});

clientApi.interceptors.response.use(
  response => response, 
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken'); 
        
        const response = await axios.post('https://your.auth.server/refresh', {
          refreshToken,
        });
        const { accessToken, refreshToken: newRefreshToken } = response.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', newRefreshToken);
        clientApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        return clientApi(originalRequest); 
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export { clientApi }