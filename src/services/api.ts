import axios from "axios";

const api = axios.create({
  baseURL: "https://smart-returns.huma-volve.com/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 15000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Request Failed:", {
      message: error.message,
      code: error.code,
      url: error.config?.baseURL + error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
    });

    return Promise.reject(error);
  }
);

export default api;