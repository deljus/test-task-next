import axios from "axios";
import { ENV } from "@/shared/config";
import { TokenStorage } from "@/shared/lib/storages/token-storage";
import type { Tokens } from "@/shared/lib/storages/token-storage";

const clientApi = axios.create({
  baseURL: ENV.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

clientApi.interceptors.request.use(
  (request) => {
    if (TokenStorage.hasToken()) {
      const { accessToken } = TokenStorage.get();
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => Promise.reject(error),
);

clientApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      TokenStorage.hasToken()
    ) {
      originalRequest._retry = true;

      try {
        const { refreshToken } = TokenStorage.get();

        const response = await axios.post<Tokens>("/refresh", {
          refreshToken,
        });
        const tokens = response.data;
        TokenStorage.set(tokens);
        clientApi.defaults.headers.common["Authorization"] =
          `Bearer ${tokens.accessToken}`;
        return clientApi(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        TokenStorage.clear();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export { clientApi };
