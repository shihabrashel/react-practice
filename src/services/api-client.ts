import axios from "axios";
import {
  requestInterceptor,
  requestErrorInterceptor,
} from "../interceptors/request-interceptor";
import {
  responseInterceptor,
  responseErrorInterceptor,
} from "../interceptors/response-interceptor";

// Instead of directly calling useLoading (hooks can’t run outside React),
// we’ll use a small helper object
let setGlobalLoading: (loading: boolean) => void;

export const setLoadingHandler = (handler: (loading: boolean) => void) => {
  setGlobalLoading = handler;
};

const apiClient = axios.create({
  baseURL: "https://localhost:7274/", // your API base URL
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

// Track requests
let activeRequests = 0;

apiClient.interceptors.request.use(
  (config) => {
    activeRequests++;
    if (setGlobalLoading) setGlobalLoading(true);
    return requestInterceptor(config);
  },
  (error) => {
    if (setGlobalLoading) setGlobalLoading(false);
    return requestErrorInterceptor(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    activeRequests--;
    if (activeRequests === 0 && setGlobalLoading) setGlobalLoading(false);
    return responseInterceptor(response);
  },
  (error) => {
    activeRequests--;
    if (activeRequests === 0 && setGlobalLoading) setGlobalLoading(false);
    return responseErrorInterceptor(error);
  }
);

export default apiClient;
