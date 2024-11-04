import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import './styles.css';
function App() {
    return (
    <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
    </div>
    );
}

export default App;

