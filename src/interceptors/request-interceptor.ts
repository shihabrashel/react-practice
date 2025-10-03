import type { InternalAxiosRequestConfig } from "axios";

const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTA4MTYyLCJyZWxhdGlvbnNoaXBJZCI6MTY2NTA0LCJyb2xlIjoiUyIsImxvY2F0aW9uSWQiOiI2NzMiLCJuYmYiOjE3NTg4ODI3MzgsImV4cCI6MTc1OTMxNDczOCwiaWF0IjoxNzU4ODgyNzM4LCJpc3MiOiJCZXN0QnJhaW5zIiwiYXVkIjoiaHR0cHM6Ly90ZXN0YXBpLmJlc3RicmFpbnMuY29tOjk0NDMvYmJTbGF0ZUFQSUVudjEifQ.e20cX0yrn5glvKYARAPDaCf-A2XyFL0cx_9Q4-i1xBM";
  //localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log("➡️ Request:", config.method?.toUpperCase(), config.url);
  return config;
};

const requestErrorInterceptor = (error: any) => {
  console.error("❌ Request error:", error);
  return Promise.reject(error);
};

export { requestInterceptor, requestErrorInterceptor };
