import axios from '../utils/initAxios';

const getAllProducts = async () => {
  try {
    const response = await axios.get(`/api/products`);
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error('getAllProducts() failed :', error.message);
  }
};

export default getAllProducts;
