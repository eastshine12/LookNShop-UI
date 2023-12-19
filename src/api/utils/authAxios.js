import Axios from 'axios';

const createAxiosInstance = (accessToken) => {
  const axiosInstance = Axios.create({
    baseURL: `http://${process.env.REACT_APP_BASE_URL}`,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      if (accessToken) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error) => Promise.reject(error),
  );

  return axiosInstance;
};

export default createAxiosInstance;
