import axios from '../utils/initAxios';

const getProduct = async (id) => {
  try {
    const response = await axios.get(`/api/products/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error('getProduct() failed :', error.message);
  }
};

export default getProduct;
