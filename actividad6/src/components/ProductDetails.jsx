import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get('id');

    useEffect(() => {
        if (productId) {
            fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product details:', error));
        }
    }, [productId]);
    if (!product) {
        return <p>Loading product details...</p>;
    }
    return (
    <div className="product-details">
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p style={{ fontWeight: 'bold', color: '#007bff' }}>Price: ${product.price}</p>
    </div>
    );
};

export default ProductDetails;
