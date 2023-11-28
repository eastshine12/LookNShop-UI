import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

function ProductList() {
  const products = [
    {
      id: 'XMMTP03H3',
      thumbnail: 'images/product1.jpg',
      reviews: 74,
      name: '스트레치 기모 조거팬츠 블랙',
      discountRate: 22,
      price: 89000,
    },
    {
      id: 'XMMPJ02H4',
      thumbnail: 'images/product2.jpg',
      reviews: 155,
      name: '커뮤터 스트레치 라이트 롱 패딩 그레이',
      discountRate: 15,
      price: 199000,
    },
    {
      id: 'XMF29592',
      thumbnail: 'images/product3.webp',
      reviews: 201,
      name: '(1+1) 모노 카라 니트 집업',
      discountRate: 14,
      price: 58000,
    },
    {
      id: 'XMMTP03H3',
      thumbnail: 'images/product1.jpg',
      reviews: 74,
      name: '스트레치 기모 조거팬츠 블랙',
      discountRate: 22,
      price: 89000,
    },
    {
      id: 'XMMPJ02H4',
      thumbnail: 'images/product2.jpg',
      reviews: 155,
      name: '커뮤터 스트레치 라이트 롱 패딩 그레이',
      discountRate: 15,
      price: 199000,
    },
    {
      id: 'XMF29592',
      thumbnail: 'images/product3.webp',
      reviews: 201,
      name: '(1+1) 모노 카라 니트 집업',
      discountRate: 14,
      price: 58000,
    },
    {
      id: 'XMMTP03H3',
      thumbnail: 'images/product1.jpg',
      reviews: 74,
      name: '스트레치 기모 조거팬츠 블랙',
      discountRate: 22,
      price: 89000,
    },
    {
      id: 'XMMPJ02H4',
      thumbnail: 'images/product2.jpg',
      reviews: 155,
      name: '커뮤터 스트레치 라이트 롱 패딩 그레이',
      discountRate: 15,
      price: 199000,
    },
    {
      id: 'XMF29592',
      thumbnail: 'images/product3.webp',
      reviews: 201,
      name: '(1+1) 모노 카라 니트 집업',
      discountRate: 14,
      price: 58000,
    },
    {
      id: 'XMMTP03H3',
      thumbnail: 'images/product1.jpg',
      reviews: 74,
      name: '스트레치 기모 조거팬츠 블랙',
      discountRate: 22,
      price: 89000,
    },
    {
      id: 'XMMPJ02H4',
      thumbnail: 'images/product2.jpg',
      reviews: 155,
      name: '커뮤터 스트레치 라이트 롱 패딩 그레이',
      discountRate: 15,
      price: 199000,
    },
    {
      id: 'XMF29592',
      thumbnail: 'images/product3.webp',
      reviews: 201,
      name: '(1+1) 모노 카라 니트 집업',
      discountRate: 14,
      price: 58000,
    },
    // Add more products as needed
  ];

  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      alignItems="flex-start"
      style={{ paddingLeft: '5em', paddingRight: '5em' }}
    >
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={2.4}>
          <Card elevation={0}>
            {/* 썸네일 */}
            <div
              style={{
                width: '100%',
                height: '0',
                paddingBottom: '150%',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <img
                src={product.thumbnail}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                }}
              />
            </div>

            <CardContent style={{ paddingLeft: 1 }}>
              <Grid container direction="column" spacing={1}>
                <Grid item container justifyContent="space-between">
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{
                      fontSize: '12px',
                    }}
                  >
                    {product.id}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      color: '#FF4848',
                    }}
                  >
                    리뷰 {product.reviews}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    style={{
                      fontSize: '16px',
                      textAlign: 'left',
                      paddingTop: '0.1em',
                      paddingBottom: '0.3em',
                    }}
                  >
                    {product.name}
                  </Typography>
                </Grid>
                <Grid item container>
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: '1.0rem',
                      paddingRight: '0.5em',
                      color: '#ff0000',
                    }}
                  >
                    {product.discountRate}%
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    style={{
                      fontSize: '1.0rem',
                    }}
                  >
                    {product.price.toLocaleString()}원
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
