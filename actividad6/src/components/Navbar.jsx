import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
        <div className="logo">
            <h1>A.Y</h1>
            <h2>STORE</h2>
        </div>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
        </div>
        </nav>
    );
};

export default Navbar;
