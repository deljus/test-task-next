const RUNTIME_MODE = import.meta.env.VITE_APP_RUNTIME_MODE;
const TOKEN_KEY = import.meta.env.VITE_APP_TOKEN_KEY || '__TOKEN__'

export const ENV = {
  API_URL: import.meta.env.VITE_APP_API_URL as string,
  IS_PROD_RUNTIME: RUNTIME_MODE === 'production',
  IS_DEV_RUNTIME: RUNTIME_MODE === 'development',
  TOKEN_KEY,
};
