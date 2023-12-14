import Axios from 'axios';

const axios = Axios.create({
  baseURL: `http://${process.env.REACT_APP_BASE_URL}`,
});

// axios.interceptors.request.use(
//   (config) => {
//     const accessToken = getToken();

//     config.headers['Authorization'] = `Bearer ${accessToken}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axios;
