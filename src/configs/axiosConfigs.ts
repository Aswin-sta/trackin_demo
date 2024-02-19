import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

const refreshAccessToken = async () => {
  try {
    const response = await axiosInstance.get("/refresh/token");
    const newAccessToken = response.data.data.token;
    localStorage.setItem("accessToken", newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    throw error;
  }
};

axiosInstance.interceptors.request.use(
  async (config) => {
    const authToken = localStorage.getItem("accessToken");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const newAccessToken = await refreshAccessToken();
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(error.config);
      } catch (refreshError) {
        console.error("Error refreshing access token:", refreshError);
        throw refreshError;
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
