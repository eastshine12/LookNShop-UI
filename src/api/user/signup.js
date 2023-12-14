import axios from '../utils/initAxios';

const signup = async (formData) => {
  try {
    const response = await axios.post('/api/users/signup', formData);
    // console.log(response);
    if (response.status === 201) {
      return response;
    }
    throw new Error('회원가입 실패');
  } catch (error) {
    console.error('회원가입 실패:', error);
    if (error.response && error.response.status === 400) {
      throw new Error(error.response.data.message || '중복된 ID');
    }
    throw error;
  }
};

export default signup;
