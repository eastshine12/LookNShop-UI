import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import getAllProducts from '../api/product/getAllProducts';

const mockProducts = [
  {
    productId: 'XMMTP03H3',
    partnerName: '업체이름1',
    thumbnail: 'images/product1.jpg',
    thumbnail2: 'images/product1-1.jpg',
    reviews: 74,
    name: '스트레치 기모 조거팬츠 블랙',
    discountRate: 23,
    price: 89011,
    totalStock: 0,
  },
  {
    productId: 'XMMPJ02H4',
    partnerName: '업체이름1',
    thumbnail: 'images/product2.jpg',
    thumbnail2: 'images/product2-2.jpg',
    reviews: 155,
    name: '커뮤터 스트레치 라이트 롱 패딩 그레이',
    discountRate: 15,
    price: 199000,
    totalStock: 10,
  },
  {
    productId: 'XMF29592',
    partnerName: '업체이름1',
    thumbnail: 'images/product3.webp',
    reviews: 201,
    name: '(1+1) 모노 카라 니트 집업',
    discountRate: 14,
    price: 58000,
    totalStock: 50,
  },
  {
    productId: 'XMMTP03H55',
    partnerName: '업체이름1',
    thumbnail: 'images/product1.jpg',
    thumbnail2: 'images/product1-1.jpg',
    reviews: 74,
    name: '스트레치 기모 조거팬츠 블랙',
    discountRate: 22,
    price: 89000,
    totalStock: 100,
  },
  {
    productId: 'XMMPJ02H66',
    partnerName: '업체이름1',
    thumbnail: 'images/product2.jpg',
    thumbnail2: 'images/product2-2.jpg',
    reviews: 155,
    name: '커뮤터 스트레치 라이트 롱 패딩 그레이',
    discountRate: 15,
    price: 199000,
    totalStock: 100,
  },
  {
    productId: 'XMF295922',
    partnerName: '업체이름1',
    thumbnail: 'images/product3.webp',
    reviews: 201,
    name: '(1+1) 모노 카라 니트 집업',
    discountRate: 14,
    price: 58000,
    totalStock: 100,
  },
  {
    productId: 'XMMTP03H61',
    partnerName: '업체이름1',
    thumbnail: 'images/product1.jpg',
    thumbnail2: 'images/product1-1.jpg',
    reviews: 74,
    name: '스트레치 기모 조거팬츠 블랙',
    discountRate: 22,
    price: 89000,
    totalStock: 100,
  },
  {
    id: 'XMMPJ02H67',
    partnerName: '업체이름1',
    thumbnail: 'images/product2.jpg',
    thumbnail2: 'images/product2-2.jpg',
    reviews: 155,
    name: '커뮤터 스트레치 라이트 롱 패딩 그레이',
    discountRate: 15,
    price: 199000,
    totalStock: 100,
  },
  {
    productId: 'XMF2959122',
    partnerName: '업체이름1',
    thumbnail: 'images/product3.webp',
    reviews: 201,
    name: '(1+1) 모노 카라 니트 집업',
    discountRate: 14,
    price: 58000,
    totalStock: 100,
  },
  {
    productId: 'XMMTP03H437',
    partnerName: '업체이름1',
    thumbnail: 'images/product1.jpg',
    thumbnail2: 'images/product1-1.jpg',
    reviews: 74,
    name: '스트레치 기모 조거팬츠 블랙',
    discountRate: 22,
    price: 89000,
    totalStock: 100,
  },
  {
    productId: 'XMMPJ0223H48',
    partnerName: '업체이름1',
    thumbnail: 'images/product2.jpg',
    thumbnail2: 'images/product2-2.jpg',
    reviews: 155,
    name: '커뮤터 스트레치 라이트 롱 패딩 그레이',
    discountRate: 15,
    price: 199000,
    totalStock: 100,
  },
  {
    productId: 'XMF295592',
    partnerName: '업체이름1',
    thumbnail: 'images/product3.webp',
    reviews: 201,
    name: '(1+1) 모노 카라 니트 집업',
    discountRate: 0,
    price: 58000,
    totalStock: 100,
  },
  // Add more products as needed
];

// 품절 뱃지의 스타일을 지정합니다.
const SoldOutBadge = styled('div')({
  marginLeft: '0.5em',
  padding: '0.2em 0.5em',
  borderRadius: '4px',
  backgroundColor: '#ff5b5b',
  color: '#fff',
  fontSize: '11px',
});

// 품절임박 뱃지의 스타일을 지정합니다.
const AlmostSoldOutBadge = styled('div')({
  marginLeft: '0.5em',
  padding: '0.2em 0.5em',
  borderRadius: '4px',
  border: '1px solid #0067d1',
  backgroundColor: '#fff',
  color: '#0067d1',
  fontSize: '11px',
});

function ProductList() {

  const navigate = useNavigate();
  const [products, setProducts] = useState(mockProducts);
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  const handleClick = (productId) => {
    navigate(`/product?id=${productId}`)
  };

  // Product 컴포넌트에서 사용할 함수
  const getStockBadge = (totalStock) => {
    if (totalStock === 0) {
      return <SoldOutBadge>품절</SoldOutBadge>;
    }
    if (totalStock <= 10) {
      return <AlmostSoldOutBadge>품절임박</AlmostSoldOutBadge>;
    }
    return null;
  };

  const fetchData = async () => {
    const response = await getAllProducts();
    setProducts(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      alignItems="flex-start"
      style={{ paddingLeft: '5em', paddingRight: '5em' }}
    >
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={2.4}>
          <Card
            elevation={0}
            onMouseEnter={() => handleMouseEnter(product.productId)}
            onMouseLeave={handleMouseLeave}
            style={{
              paddingBottom: '3em',
            }}
          >
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
                src={
                  hoveredProductId === product.productId && product.thumbnail2
                    ? `http://${process.env.REACT_APP_BASE_URL}${product.thumbnail2}`
                    : `http://${process.env.REACT_APP_BASE_URL}${product.thumbnail1}`
                }
                alt={product.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  cursor: 'pointer',
                }}
                onClick={() => handleClick(product.productId)}
                aria-hidden="true"
              />
            </div>

            <CardContent style={{ paddingLeft: 1 }}>
              <Grid container direction="column" spacing={1}>
                {/* 업체명, 리뷰 수 */}
                <Grid item container justifyContent="space-between">
                  <Typography variant="body2" color="textSecondary">
                    {product.partnerName}
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
                {/* 상품명 */}
                <Grid
                  item
                  style={{
                    paddingTop: '1em',
                    paddingBottom: '0.3em',
                  }}
                >
                  <Typography
                    variant="body1"
                    style={{
                      fontSize: '16px',
                      textAlign: 'left',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleClick(product.productId)}
                    aria-hidden="true"
                  >
                    {product.title}
                  </Typography>
                </Grid>
                {/* 가격 */}
                <Grid item container>
                  {product.discountRate > 0 ? (
                    <>
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
                          paddingRight: '7px',
                        }}
                      >
                        {(
                          Math.round(
                            (product.price * (100-product.discountRate)) / 1000,
                          ) * 10
                        ).toLocaleString()}
                        원
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{
                          fontSize: '0.95rem',
                          color: '#777',
                          textDecoration: 'line-through',
                        }}
                      >
                        {product.price.toLocaleString()}원
                      </Typography>
                    </>
                  ) : (
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      style={{
                        fontSize: '1.0rem',
                        paddingRight: '7px',
                      }}
                    >
                      {product.price.toLocaleString()}원
                    </Typography>
                  )}
                  <Grid item>{getStockBadge(product.totalStock)}</Grid>
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
