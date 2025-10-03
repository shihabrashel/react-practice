import type { AxiosResponse } from "axios";

/**
 * Global Response Interceptor
 * Handles responses and errors
 */
const responseInterceptor = (response: AxiosResponse) => {
  console.log(
    "✅ Response:",
    response.data,
    response.status,
    response.config.url
  );
  return response;
};

const responseErrorInterceptor = (error: any) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        console.warn("Unauthorized → redirecting to login...");
        localStorage.removeItem("authToken");
        window.location.href = "/login";
        break;
      case 403:
        console.warn("Forbidden → access denied.");
        break;
      case 500:
        console.error("Server error. Try again later.");
        break;
    }
  } else if (error.request) {
    console.error("❌ No response from server:", error.request);
  } else {
    console.error("Axios error:", error.message);
  }

  return Promise.reject(error);
};

export { responseInterceptor, responseErrorInterceptor };
