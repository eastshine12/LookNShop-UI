import createAxiosInstance from '../utils/authAxios';

const createOrder = async (orderData, accessToken) => {
  console.log(`orderData : ${orderData}`)
  const axios = createAxiosInstance(accessToken);
  try {
    const response = await axios.post(`/api/order`, orderData);
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error('createOrder() failed :', error.message);
  }
};

export default createOrder;
