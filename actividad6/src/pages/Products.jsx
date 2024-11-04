
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

        useEffect(() => {
            fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => setProducts(data))
                .catch(error => console.error('Error fetching products:', error));
        }, []);

        return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Products</h2>
            <div className="products-container">
                {products.map(product => (
            <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <Link to={`/products/details?id=${product.id}`}>View Details</Link>
            </div>
        ))}
        </div>
    </div>
    );
};

export default Products;
