import createAxiosInstance from '../utils/authAxios';

const getUser = async (id, accessToken) => {
  const axios = createAxiosInstance(accessToken);
  try {
    const response = await axios.get(`/api/users?userId=${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error('getUser() failed :', error.message);
  }
};

export default getUser;
