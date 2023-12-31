import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import getProduct from '../api/product/getProduct';
import createOrder from '../api/order/createOrder';

function Order() {

  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();
  const [order, setOrder] = useState({
    product: {
      productId: 0,
      name: '상품명',
      price: 10000,
      quantity: 0
    },
    customer: {
      name: '',
      email: '',
      address: '',
    },
    payment: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProduct(cookies.order.productId);
      setOrder({
        ...order,
        product: {
          productId: response.productId,
          name: response.title,
          price: (response.price * (100-response.discountRate)) / 1000 * 10 * cookies.order.quantity,
          quantity: cookies.order.quantity
        },
      });
    };
  
    fetchData();
  }, [order.product.quantity, cookies.order.productId]);

  const handleInputChange = (category, field, value) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      [category]: {
        ...prevOrder[category],
        [field]: value,
      },
    }));
  };

  const postOrder = async () => {
    try {
      const response = await createOrder([order.product], cookies.accessToken);
      console.log(response);
    } catch (error) {
      console.error('주문에 실패했습니다. :', error);
    }
  };

  const handlePayment = () => {
    postOrder();
    navigate('/order-complete')
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        주문하기
      </Typography>
      <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
        <Typography variant="h6" gutterBottom>
          상품 정보
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="body1">{order.product.name}</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body1">가격: {order.product.price}원</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body1">개수: {order.product.quantity}개</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
        <Typography variant="h6" gutterBottom>
          주문자 정보
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="이름"
              fullWidth
              variant="outlined"
              value={order.customer.name}
              onChange={(e) => handleInputChange('customer', 'name', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="이메일"
              fullWidth
              variant="outlined"
              value={order.customer.email}
              onChange={(e) => handleInputChange('customer', 'email', e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="주소"
              fullWidth
              variant="outlined"
              value={order.customer.address}
              onChange={(e) => handleInputChange('customer', 'address', e.target.value)}
            />
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
        <Typography variant="h6" gutterBottom>
          결제 정보
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="카드 번호"
              fullWidth
              variant="outlined"
              value={order.payment.cardNumber}
              onChange={(e) => handleInputChange('payment', 'cardNumber', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="유효 기간"
              fullWidth
              variant="outlined"
              value={order.payment.expiryDate}
              onChange={(e) => handleInputChange('payment', 'expiryDate', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="CVV"
              fullWidth
              variant="outlined"
              value={order.payment.cvv}
              onChange={(e) => handleInputChange('payment', 'cvv', e.target.value)}
            />
          </Grid>
        </Grid>
      </Paper>

      <Button variant="contained" color="primary" onClick={handlePayment}>
        결제하기
      </Button>
    </Container>
  );
}

export default Order;