import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import getProduct from '../api/product/getProduct';

function ProductDetail() {
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const params = new URLSearchParams(location.search);
  const productId = params.get('id');

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProduct(productId);
      setProduct(response);
    };

    fetchData();
  }, [productId]);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.content}</p>
          <p>Price: {product.price}</p>
          <p>Discount Rate: {product.discountRate}%</p>
          <p>Total Stock: {product.totalStock}</p>
          <img
            src={`http://${process.env.REACT_APP_BASE_URL}${product.thumbnail1}`}
            alt="Thumbnail 1"
          />
          {product.thumbnail2 && (
            <img
              src={`http://${process.env.REACT_APP_BASE_URL}${product.thumbnail2}`}
              alt="Thumbnail 2"
            />
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetail;
