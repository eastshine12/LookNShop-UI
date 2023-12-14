/* eslint-disable no-unused-vars */
import axios from '../utils/initAxios';

const login = async (formData) => {
  try {
    const response = await axios.post('/api/users/login', formData);
    console.log(response);
    if (response.status === 200) {
      console.log('Login successful');
      return response;
    }
    throw new Error('로그인 실패');
  } catch (error) {
    throw new Error('로그인 실패', error.message);
  }
};

export default login;
