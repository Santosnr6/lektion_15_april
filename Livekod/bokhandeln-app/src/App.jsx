import './App.css'
import Header from './components/header/Header';
import ProductList from './components/productList/ProductList';
import ProductsPage from './pages/productsPage/ProductsPage';
import CartPage from './pages/cartPage/CartPage';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="app">
      <Header cartBalance={ cartBalance } />
      <Routes>
        <Route path="/" element={ <ProductsPage /> } />
        <Route path="/cart" element={ <CartPage />} />
      </Routes>
    </div>
    
  )
}

export default App;
