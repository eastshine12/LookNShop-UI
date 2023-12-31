import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid, Container, Paper, Typography, Button } from '@mui/material';
import getProduct from '../api/product/getProduct';


function ProductDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['order']);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const params = new URLSearchParams(location.search);
  const productId = params.get('id');

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProduct(productId);
      setProduct(response);
    };

    fetchData();
  }, [productId]);

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleClickOrder = () => {
    setCookie('order', { productId: product.productId, quantity }, { path: '/' });
    navigate('/order')
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {/* 좌측 썸네일 이미지 */}
        <Grid item xs={12} md={7} style={{
                width: '100%',
                height: '1000px',
                position: 'relative',
                overflow: 'hidden',
              }}>
          {product? (
          <img
            src={`http://${process.env.REACT_APP_BASE_URL}${product.thumbnail1}`}
            alt="상품 썸네일"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute'
            }}
          />
          ) : (<p>loading..</p>)}
        </Grid>

        {/* 우측 상품 정보 */}
        <Grid item xs={12} md={5}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h5">{product ? product.title : '상품 이름'}</Typography>
            {product ? (
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
                      ) * 10 * quantity
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
                    {(product.price * quantity).toLocaleString()}원
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
                  {(product.price * quantity).toLocaleString()}원
                </Typography>
              )}
            </Grid>
            ) : <p>loading</p>
            }
            

            <Grid container alignItems="center">
              <Button
                variant="outlined"
                color="primary"
                onClick={handleDecreaseQuantity}
                style={{ marginRight: '8px' }}
              >
                -
              </Button>
              <Typography variant="body1" style={{ marginBottom: '8px' }}>
                {quantity}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleIncreaseQuantity}
                style={{ marginRight: '8px' }}
              >
                +
              </Button>
            </Grid>
            <Grid container justifyContent="space-between" alignItems="center">
              {/* 옵션 선택 등 추가 */}
              {/* 최종 가격, 개수, 결제하기, 장바구니 담기 버튼 등 추가 */}
              <Button variant="contained" color="primary" onClick={handleClickOrder}>
                구매하기
              </Button>
              <Button variant="outlined" color="primary" style={{ marginLeft: '8px' }}>
                장바구니
              </Button>
            </Grid>
          </Paper>
        </Grid>

        {/* 상품 상세정보, 후기, 문의 등 추가 */}
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
            <Typography variant="h5">상품 상세정보</Typography>
            <Typography>
            {product ? product.content : '내용'}
            </Typography>
          </Paper>
        </Grid>

        {/* 후기, 문의 등 추가 */}
        {/* 예시: 상품 후기 컴포넌트 추가 */}
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
            <Typography variant="h5">상품 후기</Typography>
            {/* 상품 후기 컴포넌트 추가 */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )

  // return (
  //   <div>
  //     {product ? (
  //       <div>
  //         <h2>{product.title}</h2>
  //         <p>{product.content}</p>
  //         <p>Price: {product.price}</p>
  //         <p>Discount Rate: {product.discountRate}%</p>
  //         <p>Total Stock: {product.totalStock}</p>
  //         <img
  //           src={`http://${process.env.REACT_APP_BASE_URL}${product.thumbnail1}`}
  //           alt="Thumbnail 1"
  //         />
  //         {product.thumbnail2 && (
  //           <img
  //             src={`http://${process.env.REACT_APP_BASE_URL}${product.thumbnail2}`}
  //             alt="Thumbnail 2"
  //           />
  //         )}
  //       </div>
  //     ) : (
  //       <p>Loading...</p>
  //     )}
  //   </div>
  // );
}

export default ProductDetail;
