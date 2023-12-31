import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Container, Box } from '@mui/material';

function OrderComplete() {
  const navigate = useNavigate();

  const handleToMain = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <Typography variant="h5">주문이 완료되었습니다.</Typography>
        <Typography variant="body1" gutterBottom>
          주문 번호: {}
        </Typography>
        <Typography variant="body1" gutterBottom>
          주문 일시: {}
        </Typography>
        <Typography variant="body1" gutterBottom>
          총 주문 금액: {} 원
        </Typography>
        <Button variant="contained" color="primary" onClick={handleToMain}>
          메인으로 이동
        </Button>
      </Box>
    </Container>
  );
}

export default OrderComplete;